import { theme as AntDesignThemes, ThemeConfig } from 'antd';

import Theme from './Theme';

export function getAntDesignThemeConfig(theme: Theme): ThemeConfig {
  return {
    algorithm:
      theme === Theme.Light ? AntDesignThemes.defaultAlgorithm : AntDesignThemes.darkAlgorithm,
    token: {
      colorPrimary: '#3498db',
      colorLink: '#3498db',
      fontFamily: 'Montserrat, sans-serif',
      motion: false
    }
  };
}
