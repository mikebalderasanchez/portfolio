import { defaultLocale, isLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}
