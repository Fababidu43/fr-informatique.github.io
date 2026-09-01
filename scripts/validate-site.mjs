import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = fs.readdirSync(root).filter((name) => name.endsWith(".html") && name !== "index_test.html");
const errors = [];
const ids = new Map();
const titles = new Map();
const descriptions = new Map();
const h1Texts = new Map();

function rememberUnique(store, value, page, label) {
  if (!value) return;
  if (store.has(value)) errors.push(`${page}: ${label} dupliqué avec ${store.get(value)}`);
  else store.set(value, page);
}

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  const h1s = [...html.matchAll(/<h1(?:\s[^>]*)?>/g)];
  if (h1s.length !== 1) errors.push(`${page}: ${h1s.length} balise(s) h1`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1]?.trim();
  const h1Text = html.match(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!title || title.length < 20 || title.length > 90) errors.push(`${page}: title absent ou excessivement long`);
  if (!description || description.length < 80 || description.length > 170) errors.push(`${page}: meta description absente ou hors limites`);
  rememberUnique(titles, title, page, "title");
  rememberUnique(descriptions, description, page, "meta description");
  rememberUnique(h1Texts, h1Text, page, "h1");

  const expectedCanonical = page === "index.html" ? "https://fr-informatique.com/" : `https://fr-informatique.com/${page}`;
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map((match) => match[1]);
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) errors.push(`${page}: URL canonique absente, multiple ou incorrecte`);
  if (!/<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">/.test(html)) errors.push(`${page}: directives robots SEO absentes`);
  if (!/<html lang="fr">/.test(html)) errors.push(`${page}: langue française absente`);

  const rawIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const pageIds = new Set(rawIds);
  if (rawIds.length !== pageIds.size) errors.push(`${page}: identifiant HTML ou SVG dupliqué`);
  ids.set(page, pageIds);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const [target, fragment] = href.split("#");
    const targetPath = path.join(root, target || page);
    if (!fs.existsSync(targetPath)) errors.push(`${page}: lien cassé vers ${href}`);
    if (fragment && fs.existsSync(targetPath)) {
      const targetHtml = fs.readFileSync(targetPath, "utf8");
      if (!new RegExp(`\\sid="${fragment}"`).test(targetHtml)) errors.push(`${page}: ancre absente ${href}`);
    }
  }

  for (const match of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) {
    if (!fs.existsSync(path.join(root, match[1]))) errors.push(`${page}: ressource absente ${match[1]}`);
  }

  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(tag[0])) errors.push(`${page}: image sans attribut alt`);
    if (!/\swidth="\d+"/.test(tag[0]) || !/\sheight="\d+"/.test(tag[0])) errors.push(`${page}: image sans dimensions explicites`);
  }

  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    if (!/\srel="[^"]*noopener[^"]*"/.test(tag[0])) errors.push(`${page}: lien externe sans rel=noopener`);
  }

  const schemas = [];
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(block[1]);
      schemas.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch { errors.push(`${page}: JSON-LD invalide`); }
  }

  const business = schemas.find((entity) => entity?.["@type"] === "ProfessionalService");
  if (!business?.name || !business?.address?.addressLocality || !business?.telephone || !business?.email || !business?.["@id"]) errors.push(`${page}: données ProfessionalService incomplètes`);
  if (!schemas.some((entity) => entity?.["@type"] === "WebSite")) errors.push(`${page}: données WebSite absentes`);

  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || "";
  const readableText = main.replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = readableText ? readableText.split(" ").length : 0;
  const isServicePage = /<section class="service-hero">/.test(html);
  if (isServicePage && wordCount < 650) errors.push(`${page}: contenu de service trop court (${wordCount} mots)`);
  if (!isServicePage && wordCount < 250) errors.push(`${page}: contenu principal trop court (${wordCount} mots)`);
  if (isServicePage) {
    if ((html.match(/class="example-card"/g) || []).length < 3) errors.push(`${page}: pas assez d’exemples concrets`);
    if (!/class="plain-definition"/.test(html)) errors.push(`${page}: définition simple absente`);
    if (!/class="service-story"/.test(html)) errors.push(`${page}: schéma pédagogique absent`);
    if (!schemas.some((entity) => entity?.["@type"] === "Service")) errors.push(`${page}: données Service absentes`);
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
if (/<priority>|<changefreq>/.test(sitemap)) errors.push("sitemap.xml: propriétés ignorées par Google encore présentes");
const sitemapPages = pages.filter((page) => page !== "404.html");
for (const page of sitemapPages) {
  const url = page === "index.html" ? "https://fr-informatique.com/" : `https://fr-informatique.com/${page}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap.xml: URL absente ${url}`);
}

const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== sitemapPages.length || new Set(sitemapUrls).size !== sitemapUrls.length) errors.push("sitemap.xml: nombre d’URL incorrect ou doublon");
for (const lastmod of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod[1]) || Number.isNaN(Date.parse(lastmod[1]))) errors.push(`sitemap.xml: date lastmod invalide ${lastmod[1]}`);
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://fr-informatique.com/sitemap.xml")) errors.push("robots.txt: sitemap absent");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`${pages.length} pages vérifiées : SEO, contenu, accessibilité, liens, ressources, JSON-LD, robots.txt et sitemap valides.`);
