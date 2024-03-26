import { useContext } from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext';
import { ThemesEnum } from 'src/themes/ThemesEnum';

/**
 * Hook to get the current theme of the app.
 * @returns {ThemesEnum | null} Current theme of the app.
 */
export default function useTheme(): ThemesEnum | null {
  return useContext(ThemeContext);
}
