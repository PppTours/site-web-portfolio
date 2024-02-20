import { createContext, useContext } from 'react';

import { ThemesEnum } from '../themes/ThemesEnum';

/**
 * Context for getting the theme of the app anywhere in the application.
 */
export const ThemeContext = createContext<ThemesEnum | null>(null);

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
