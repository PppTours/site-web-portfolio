import { createContext } from 'react';
import Theme from 'src/themes/Theme';

export const ThemeContext = createContext<Theme | null>(null);
