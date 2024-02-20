import { theme as AntDesignThemes, ThemeConfig } from 'antd';

import { ThemesEnum } from './ThemesEnum';

/**
 * Get Ant Design theme config.
 * @param {ThemesEnum} theme Theme for which to get the config.
 * @returns {ThemeConfig} Ant Design theme config.
 */
export function getAntDesignThemeConfig(theme: ThemesEnum): ThemeConfig {
  return {
    algorithm:
      theme === ThemesEnum.Light ? AntDesignThemes.defaultAlgorithm : AntDesignThemes.darkAlgorithm,
    token: {
      colorPrimary: '#009fe3',
      fontFamily: 'Montserrat, sans-serif'
    }
  };
}
