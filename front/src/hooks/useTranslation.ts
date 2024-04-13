import { useTranslation as useI18nTranslation } from 'react-i18next';
import { SupportedLanguages } from 'src/i18n/i18n';
import { I18nKeys } from 'src/i18n/I18nKeys';

interface UseTranslationReturnType {
  currentLanguage: SupportedLanguages;
  translate: (key: I18nKeys) => string;
  changeLanguage: (language: SupportedLanguages) => Promise<void>;
}

export default function useTranslation(): UseTranslationReturnType {
  const { t, i18n } = useI18nTranslation();

  function translate(key: I18nKeys): string {
    return t(key);
  }

  async function changeLanguage(language: SupportedLanguages): Promise<void> {
    await i18n.changeLanguage(language);
  }

  return { currentLanguage: i18n.language as SupportedLanguages, translate, changeLanguage };
}
