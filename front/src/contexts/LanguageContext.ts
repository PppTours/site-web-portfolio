import { createContext, useContext } from 'react';

export enum LanguagesEnum {
  French = 'french',
  English = 'english'
}

/**
 * Context for getting the language of the app anywhere in the application.
 */
export const LanguageContext = createContext<LanguagesEnum | null>(null);

export function useLanguage() {
  const language = useContext(LanguageContext);
  return language;
}
