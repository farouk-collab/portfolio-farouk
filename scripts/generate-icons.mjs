// Génère un sprite SVG unique (cache immuable) à partir de simple-icons,
// pour ne pas répéter les tracés des logos dans le HTML ni dans le bundle JS.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as simpleIcons from "simple-icons";
import { brands } from "../src/lib/brands-map.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src", "assets");

function readable(hex) {
  const n = parseInt(hex, 16);
  const lum = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  return lum < 0.35 ? "#e2e8f0" : `#${hex}`;
}

const symbols = [];
const colors = {};
for (const slug of [...new Set(Object.values(brands))]) {
  const icon = simpleIcons[`si${slug}`];
  if (!icon) throw new Error(`Icône simple-icons introuvable : si${slug}`);
  symbols.push(`<symbol id="${slug}" viewBox="0 0 24 24"><path d="${icon.path}"/></symbol>`);
  colors[slug] = readable(icon.hex);
}

await mkdir(outDir, { recursive: true });
await writeFile(
  path.join(outDir, "tech-icons.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join("")}</svg>\n`,
);
// Une classe par marque (aucun style en ligne : compatible avec une CSP sans 'unsafe-inline').
const css = Object.entries(colors)
  .map(([slug, color]) => `.brand-${slug}{--brand:${color}}`)
  .join("\n");
await writeFile(path.join(outDir, "brand-colors.css"), `${css}\n`);
console.log(`Sprite généré : ${symbols.length} logos`);
