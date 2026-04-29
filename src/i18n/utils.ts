import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./en";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const translations: Record<Lang, TranslationKeys> = {
  en,
  es,
};

export function getLang(url: URL, base: string = "/"): Lang {
  const pathname = url.pathname.replace(base, "");
  const firstSegment = pathname.split("/")[0];

  if (firstSegment === "es") return "es";
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternatePath(url: URL, base: string = "/"): string {
  const pathname = url.pathname.replace(base, "");
  const isEs = pathname.startsWith("es");

  if (isEs) {
    // Estamos en /es → alternativa es /
    const withoutEs = pathname.replace(/^es\/?/, "");
    return base + (withoutEs || "");
  } else {
    // Estamos en / → alternativa es /es/
    return base + "es/" + (pathname || "");
  }
}