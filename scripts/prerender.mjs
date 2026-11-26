// Génération statique : une page HTML pré-rendue par langue (/ et /en/),
// avec CSS critique intégrée, polices préchargées et métadonnées localisées.
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { render, locales, site } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const SITE = site.url.replace(/\/$/, "");
// Le gabarit HTML contient l'URL Render par défaut : on la remplace par l'URL configurée.
let template = (await readFile(path.join(dist, "index.html"), "utf8")).replaceAll("https://portfolio-farouk.onrender.com", SITE);

if (!template.includes("<!--app-html-->")) {
  throw new Error("Marqueur <!--app-html--> introuvable dans dist/index.html");
}

// Préchargement des deux polices visibles au-dessus de la ligne de flottaison.
const assets = await readdir(path.join(dist, "assets"));
const preloads = ["space-grotesk-latin-wght-normal", "inter-latin-wght-normal"]
  .map((prefix) => assets.find((f) => f.startsWith(`${prefix}-`) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join("");

// Commit déployé (Render fournit RENDER_GIT_COMMIT) : la CI s'en sert pour vérifier la production.
const commit = (process.env.RENDER_GIT_COMMIT || process.env.GITHUB_SHA || "local").replace(/[^\w.-]/g, "");

const alternates = Object.values(locales)
  .map((l) => `<link rel="alternate" hreflang="${l.locale}" href="${SITE}${l.meta.path}">`)
  .concat(`<link rel="alternate" hreflang="x-default" href="${SITE}/">`)
  .join("");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Balise meta ${attr}="${key}" introuvable`);
  return html.replace(re, (_, a, b) => `${a}${escapeAttr(value)}${b}`);
}

for (const content of Object.values(locales)) {
  const { locale, meta } = content;
  const url = `${SITE}${meta.path}`;
  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace("</title>", `</title>${preloads}<meta name="build-commit" content="${commit}">${alternates}`)
    .replace("<!--app-html-->", render(locale));

  html = setMeta(html, "name", "description", meta.description);
  html = setMeta(html, "property", "og:title", meta.title);
  html = setMeta(html, "property", "og:description", meta.ogDescription);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:locale", meta.ogLocale);

  const outDir = path.join(dist, meta.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  console.log(`Pré-rendu ${locale} OK : ${meta.path} (${(Buffer.byteLength(html) / 1024).toFixed(1)} Ko)`);
}

// sitemap.xml et robots.txt générés depuis l'URL configurée.
const today = new Date().toISOString().slice(0, 10);
const links = Object.values(locales)
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.locale}" href="${SITE}${l.meta.path}" />`)
  .join("\n");
const urls = Object.values(locales)
  .map((l) => `  <url>\n    <loc>${SITE}${l.meta.path}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`)
  .join("\n");
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

await rm(path.join(root, "dist-ssr"), { recursive: true, force: true });
