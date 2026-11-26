import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Les vidéos et posters restent des fichiers séparés (jamais inlinés en base64).
    assetsInlineLimit: 0,
    target: "es2022",
  },
});
