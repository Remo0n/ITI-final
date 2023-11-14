import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arrLang from "./Languages/Ar.json";
i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "First initialize.",
            part2: "Learn React",
            part3: "learning",
          },
        },
      },
      ar: {
        translation: arrLang,
      },
    },
  });

export default i18n;
