import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Même CSP qu'en production (render.yaml / docker), sans upgrade-insecure-requests (localhost en HTTP).
// Appliquée à `vite preview` : les tests end-to-end échouent sur toute violation.
const previewCsp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Les vidéos et posters restent des fichiers séparés (jamais inlinés en base64).
    assetsInlineLimit: 0,
    target: "es2022",
  },
  preview: {
    headers: {
      "Content-Security-Policy": previewCsp,
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
});
