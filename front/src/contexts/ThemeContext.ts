import { createContext } from 'react';
import { ThemesEnum } from 'src/themes/ThemesEnum';

/**
 * Context for getting the theme of the app anywhere in the application.
 */
export const ThemeContext = createContext<ThemesEnum | null>(null);
