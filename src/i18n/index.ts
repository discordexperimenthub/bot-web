import { createI18n, useI18n } from "vue-i18n";

import datetimeFormats from "./rules/datetime";
import en from "./locales/en-US.json";
import de from "./locales/de-DE.json";

const languages = {
  "de-DE": de,
  "en-US": en,
};

export type locales = keyof typeof languages;
export interface locale {
  code: string;
  flag: string;
  name: string;
}

export const locales: locale[] = [
  { code: "de-DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "en-US", flag: "🇺🇸", name: "English (US)" },
];

export const i18n = createI18n({
  locale: window.navigator.language,
  fallbackLocale: "en-US",
  legacy: false,
  globalInjection: true,
  messages: languages,
  datetimeFormats: locales.reduce(
    (result, locale) => ({ ...result, [locale.code]: datetimeFormats }),
    {}
  ),
  runtimeOnly: false,
});
