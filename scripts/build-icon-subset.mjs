import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";

/*
 * Bootstrap Icons pèse ~100 Ko (CSS) + ~130 Ko (police woff2) pour environ
 * 2000 icônes, alors que le site n'en utilise qu'une petite soixantaine.
 * Ce script régénère à la fois :
 *  - un CSS ne contenant que les règles des icônes réellement utilisées
 *    (détectées automatiquement dans le générateur) ;
 *  - une police woff2/woff ne contenant que les glyphes correspondants,
 *    via HarfBuzz (subset-font), pour ne plus télécharger les ~1950 icônes
 *    inutilisées.
 * Il suffit de relancer ce script après avoir ajouté une nouvelle icône bi-*.
 */
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatorSource = fs.readFileSync(path.join(root, "scripts/generate-site.mjs"), "utf8");
const usedIcons = new Set([...generatorSource.matchAll(/\bbi-[a-z0-9-]+/g)].map((m) => m[0]));

const vendorDir = path.join(root, "assets/vendor/bootstrap-icons");
const fullCss = fs.readFileSync(path.join(vendorDir, "bootstrap-icons.css"), "utf8");

const sharedRule = fullCss.match(/\.bi::before,[\s\S]*?\[class\*=" bi-"\]::before \{[^}]+\}/)[0];

const iconRules = [];
const codepoints = new Set();
for (const match of fullCss.matchAll(/\.(bi-[a-z0-9-]+)::before \{ content: "\\([0-9a-f]+)"; \}/g)) {
  if (!usedIcons.has(match[1])) continue;
  iconRules.push(match[0]);
  codepoints.add(parseInt(match[2], 16));
}

const missing = [...usedIcons].filter((icon) => !iconRules.some((rule) => rule.startsWith(`.${icon}::`)));
if (missing.length) {
  console.error("Icônes introuvables dans bootstrap-icons.css :", missing.join(", "));
  process.exit(1);
}

const glyphText = [...codepoints].map((code) => String.fromCodePoint(code)).join("");
const fontsDir = path.join(vendorDir, "fonts");
const fullWoff2 = fs.readFileSync(path.join(fontsDir, "bootstrap-icons.woff2"));
const fullWoff = fs.readFileSync(path.join(fontsDir, "bootstrap-icons.woff"));

const [subsetWoff2, subsetWoff] = await Promise.all([
  subsetFont(fullWoff2, glyphText, { targetFormat: "woff2" }),
  subsetFont(fullWoff, glyphText, { targetFormat: "woff" })
]);
fs.writeFileSync(path.join(fontsDir, "bootstrap-icons.subset.woff2"), subsetWoff2);
fs.writeFileSync(path.join(fontsDir, "bootstrap-icons.subset.woff"), subsetWoff);

const fontFace = `@font-face {
  font-display: block;
  font-family: "bootstrap-icons";
  src: url("./fonts/bootstrap-icons.subset.woff2") format("woff2"),
url("./fonts/bootstrap-icons.subset.woff") format("woff");
}`;

const banner = `/*!\n * Sous-ensemble de Bootstrap Icons v1.11.3 (https://icons.getbootstrap.com/)\n * Généré par scripts/build-icon-subset.mjs — ne pas éditer à la main.\n * Licensed under MIT (https://github.com/twbs/icons/blob/main/LICENSE)\n */\n`;
const output = `${banner}\n${fontFace}\n\n${sharedRule}\n\n${iconRules.join("\n")}\n`;
fs.writeFileSync(path.join(vendorDir, "bootstrap-icons.subset.css"), output, "utf8");

console.log(`Sous-ensemble CSS généré : ${iconRules.length} icônes, ${(Buffer.byteLength(output) / 1024).toFixed(1)} Ko (contre ${(Buffer.byteLength(fullCss) / 1024).toFixed(1)} Ko pour le fichier complet).`);
console.log(`Sous-ensemble police généré : ${(subsetWoff2.length / 1024).toFixed(1)} Ko woff2 (contre ${(fullWoff2.length / 1024).toFixed(1)} Ko pour la police complète).`);
