import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { locales } from "./content";

export { locales };
export { site } from "./content/shared";

export function render(locale) {
  return renderToString(
    <StrictMode>
      <App locale={locale} />
    </StrictMode>,
  );
}
