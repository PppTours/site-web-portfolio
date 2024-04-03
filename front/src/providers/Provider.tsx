import { ConfigProvider as AntDesignProvider } from 'antd';
import { ReactElement } from 'react';
import { DispatchContext } from 'src/contexts/DispatchContext';
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
export default function Provider({ theme, dispatch, children }: IProvider) {
  return (
    <ThemeContext.Provider value={theme}>
      <AntDesignProvider theme={getAntDesignThemeConfig(theme)}>
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </AntDesignProvider>
    </ThemeContext.Provider>
  );
}
