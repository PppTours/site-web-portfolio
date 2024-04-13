import { theme as AntDesignThemes, ThemeConfig } from 'antd';

import Theme from './Theme';

export function getAntDesignThemeConfig(theme: Theme): ThemeConfig {
  return {
    algorithm:
      theme === Theme.Light ? AntDesignThemes.defaultAlgorithm : AntDesignThemes.darkAlgorithm,
    token: {
      colorPrimary: '#009fe3',
      colorLink: '#009fe3',
      fontFamily: 'Montserrat, sans-serif',
      motion: false
    }
  };
}
