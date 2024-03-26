import { ConfigProvider as AntDesignProvider } from 'antd';
import { ReactElement } from 'react';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { LanguageContext, LanguagesEnum } from 'src/contexts/LanguageContext';
import { ThemeContext } from 'src/contexts/ThemeContext';
import { AppAction } from 'src/reducers/Reducer';
import { getAntDesignThemeConfig } from 'src/themes/AntDesignThemeConfig';
import { ThemesEnum } from 'src/themes/ThemesEnum';

interface IProvider {
  /**
   * Initial theme of the app.
   */
  theme: ThemesEnum;

  /**
   * Initial language of the app.
   */
  language: LanguagesEnum;

  /**
   * Dispatcher.
   */
  dispatch: React.Dispatch<AppAction>;

  /**
   * Elements benefiting from the provider.
   */
  children: ReactElement;
}

/**
 * App provider.
 */
export default function Provider({ theme, language, dispatch, children }: IProvider) {
  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <AntDesignProvider theme={getAntDesignThemeConfig(theme)}>
          <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </AntDesignProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
