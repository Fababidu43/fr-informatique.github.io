import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/*
 * Bootstrap Icons pèse ~100 Ko pour environ 2000 icônes alors que le site
 * n'en utilise qu'une petite quarantaine. Ce script régénère un fichier CSS
 * ne contenant que les icônes réellement utilisées (détectées automatiquement
 * dans le générateur), pour ne jamais avoir à le maintenir à la main : il
 * suffit de relancer ce script après avoir ajouté une nouvelle icône bi-*.
 */
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatorSource = fs.readFileSync(path.join(root, "scripts/generate-site.mjs"), "utf8");
const usedIcons = new Set([...generatorSource.matchAll(/\bbi-[a-z0-9-]+/g)].map((m) => m[0]));

const vendorDir = path.join(root, "assets/vendor/bootstrap-icons");
const fullCss = fs.readFileSync(path.join(vendorDir, "bootstrap-icons.css"), "utf8");

const fontFace = fullCss.match(/@font-face\s*\{[^}]+\}/)[0];
const sharedRule = fullCss.match(/\.bi::before,[\s\S]*?\[class\*=" bi-"\]::before \{[^}]+\}/)[0];

const iconRules = [];
for (const match of fullCss.matchAll(/\.(bi-[a-z0-9-]+)::before \{ content: "\\[0-9a-f]+"; \}/g)) {
  if (usedIcons.has(match[1])) iconRules.push(match[0]);
}

const missing = [...usedIcons].filter((icon) => !iconRules.some((rule) => rule.startsWith(`.${icon}::`)));
if (missing.length) {
  console.error("Icônes introuvables dans bootstrap-icons.css :", missing.join(", "));
  process.exit(1);
}

const banner = `/*!\n * Sous-ensemble de Bootstrap Icons v1.11.3 (https://icons.getbootstrap.com/)\n * Généré par scripts/build-icon-subset.mjs — ne pas éditer à la main.\n * Licensed under MIT (https://github.com/twbs/icons/blob/main/LICENSE)\n */\n`;
const output = `${banner}\n${fontFace}\n\n${sharedRule}\n\n${iconRules.join("\n")}\n`;
fs.writeFileSync(path.join(vendorDir, "bootstrap-icons.subset.css"), output, "utf8");
console.log(`Sous-ensemble généré : ${iconRules.length} icônes, ${(Buffer.byteLength(output) / 1024).toFixed(1)} Ko (contre ${(Buffer.byteLength(fullCss) / 1024).toFixed(1)} Ko pour le fichier complet).`);
