import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.ts";
import es from "./lang/es.ts";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...en },
      es: { ...es },
    },
    lng: "es",
    fallbackLng: "es",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
