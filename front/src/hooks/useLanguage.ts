import { useContext } from 'react';
import { LanguageContext, LanguagesEnum } from 'src/contexts/LanguageContext';

/**
 * Hook to get the current language of the app.
 * @returns {LanguagesEnum | null} Current language of the app.
 */
export default function useLanguage(): LanguagesEnum | null {
  return useContext(LanguageContext);
}
