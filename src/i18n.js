import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arLang from "./Languages/Ar.json";
import enLang from "./Languages/En.json";
i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enLang,
      },
      ar: {
        translation: arLang,
      },
    },
  });

export default i18n;
