/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
export const LANG_PROPERTY_NAME = "saved-language";

const lang = localStorage.getItem(LANG_PROPERTY_NAME) || "pl";
localStorage.setItem(LANG_PROPERTY_NAME, lang);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: lang,
    debug: false,
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
