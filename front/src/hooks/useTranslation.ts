import { useTranslation as useI18nTranslation } from 'react-i18next';
import { SupportedLanguages } from 'src/i18n/i18n';
import { I18nKeys } from 'src/i18n/I18nKeys';

/**
 * `useTranslation` return type.
 */
interface UseTranslationReturn {
  /**
   * Current language of the app.
   */
  currentLanguage: SupportedLanguages;

  /**
   * Get the translation into current language according to the key.
   * @param {I18nKeys} key i18n key to get the corresponding translation.
   * @returns {string} Translation into current language according to the key.
   */
  translate: (key: I18nKeys) => string;

  /**
   * Change the current language of the application.
   * @param {SupportedLanguages} language New language of the application.
   */
  changeLanguage: (language: SupportedLanguages) => Promise<void>;
}

/**
 * Hook to manage the language of the application.
 * @returns {UseTranslationReturn} Functions to manage the language of the application.
 */
export default function useTranslation(): UseTranslationReturn {
  const { t, i18n } = useI18nTranslation();

  /**
   * Get the translation into current language according to the key.
   * @param {I18nKeys} key i18n key to get the corresponding translation.
   * @returns {string} Translation into current language according to the key.
   */
  function translate(key: I18nKeys): string {
    return t(key);
  }

  /**
   * Change the current language of the application.
   * @param {SupportedLanguages} language New language of the application.
   */
  async function changeLanguage(language: SupportedLanguages): Promise<void> {
    await i18n.changeLanguage(language);
  }

  return { currentLanguage: i18n.language as SupportedLanguages, translate, changeLanguage };
}
