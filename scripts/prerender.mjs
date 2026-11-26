// Injecte le rendu serveur de l'application dans dist/index.html (génération statique).
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(indexPath, "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Marqueur <!--app-html--> introuvable dans dist/index.html");
}

let html = template.replace("<!--app-html-->", render());

// CSS intégrée au HTML (≈ 9 Ko gzip) : supprime une requête bloquante avant le premier affichage.
// Préchargement des deux polices visibles au-dessus de la ligne de flottaison (évite le décalage de mise en page).
const assets = await readdir(path.join(root, "dist", "assets"));
const preloads = ["space-grotesk-latin-wght-normal", "inter-latin-wght-normal"]
  .map((prefix) => assets.find((f) => f.startsWith(`${prefix}-`) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join("");
html = html.replace("</title>", `</title>${preloads}`);

const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = await readFile(path.join(root, "dist", cssLink[1]), "utf8");
  html = html.replace(cssLink[0], () => `<style>${css}</style>`);
}
await writeFile(indexPath, html);
await rm(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`Pré-rendu OK : ${(Buffer.byteLength(html) / 1024).toFixed(1)} Ko écrits dans dist/index.html`);
