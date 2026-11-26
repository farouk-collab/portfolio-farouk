import { createContext, useContext } from "react";
import fr from "./fr";
import en from "./en";

export const locales = { fr, en };
export const defaultLocale = "fr";

const ContentContext = createContext(fr);

export function ContentProvider({ locale, children }) {
  return <ContentContext.Provider value={locales[locale] ?? fr}>{children}</ContentContext.Provider>;
}

/** Textes de la langue courante. */
export function useContent() {
  return useContext(ContentContext);
}

export function localeFromPath(pathname) {
  return pathname.startsWith("/en") ? "en" : "fr";
}
