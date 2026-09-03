import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import CleanCSS from "clean-css";

/*
 * site.css reste la source lisible et éditable. Ce script génère à côté
 * une version minifiée (site.min.css), regénérée automatiquement à chaque
 * "npm run generate" — inutile de la maintenir ou de l'éditer à la main.
 */
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = path.join(root, "assets/css/site.css");
const source = fs.readFileSync(cssPath, "utf8");

const output = new CleanCSS({ level: 2 }).minify(source);
if (output.errors.length) {
  console.error("Erreur de minification CSS :", output.errors.join("\n"));
  process.exit(1);
}

const outPath = path.join(root, "assets/css/site.min.css");
fs.writeFileSync(outPath, output.styles, "utf8");
console.log(`CSS minifié : ${(Buffer.byteLength(output.styles) / 1024).toFixed(1)} Ko (contre ${(Buffer.byteLength(source) / 1024).toFixed(1)} Ko pour la source).`);
