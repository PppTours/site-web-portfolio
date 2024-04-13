import { useContext } from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext';
import Theme from 'src/themes/Theme';

export default function useTheme(): Theme | null {
  return useContext(ThemeContext);
}
