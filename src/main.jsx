import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import "./assets/brand-colors.css";
import App from "./App";
import { localeFromPath } from "./content";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App locale={localeFromPath(window.location.pathname)} />
  </StrictMode>
);

// Le HTML est pré-rendu au build : on l'hydrate. En dev (HTML vide), rendu client classique.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
