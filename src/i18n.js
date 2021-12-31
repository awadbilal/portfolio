import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/ar/translation.json";

// Initialization the files of translation.
const translationsEn = translationEN;
const translationsTr = translationTR;

const resources = {
  en: { translation: translationsEn },
  ar: { translation: translationsTr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;