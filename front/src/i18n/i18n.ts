import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export enum SupportedLanguages {
  English = 'en',
  French = 'fr'
}

const currentHost = import.meta.env.VITE_DEVELOPMENT_HOST;

i18n
  .use(LanguageDetector)
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    // Language loaded when translation is not available.
    fallbackLng: SupportedLanguages.English,
    interpolation: {
      // Escape the values and avoid XSS attacks.
      // Useless because React already does it.
      escapeValue: false
    },
    backend: {
      loadPath: `${currentHost}/i18n/{{lng}}.json`
    }
  });

export default i18n;
