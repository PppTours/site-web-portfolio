import { createContext } from 'react';

/**
 * Languages supported by the app.
 */
export enum LanguagesEnum {
  French = 'french',
  English = 'english'
}

/**
 * Context for getting the language of the app anywhere in the application.
 */
export const LanguageContext = createContext<LanguagesEnum | null>(null);
