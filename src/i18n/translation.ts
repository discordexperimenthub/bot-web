import { i18n, locales} from "./index";
import { nextTick } from "vue";

const Translation = {
  get defaultLocale() {
    return "en-US";
  },

  get supportedLocales() {
    return locales;
  },

  get currentLocale() {
    return i18n.global.locale.value;
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale: locales) {
    await Translation.loadLocaleMessages(newLocale);
    Translation.currentLocale = newLocale;
    let querySelector = document.querySelector("html") as HTMLHtmlElement;
    querySelector.setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
  },

  async loadLocaleMessages(locale: locales) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }

    return nextTick();
  },

  isLocaleSupported(locale: string) {
    return Translation.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale = window.navigator.language || Translation.defaultLocale;

    return {
      locale: locale,
      localeNoRegion: locale.split("-")[0],
    };
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale") as string;

    if (Translation.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Translation.getPersistedLocale();
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Translation.getUserLocale();

    if (Translation.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Translation.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return Translation.defaultLocale;
  },
};

export default Translation;
