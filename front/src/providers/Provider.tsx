import { ConfigProvider as AntDesignProvider } from 'antd';
import { ReactElement } from 'react';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { ThemeContext } from 'src/contexts/ThemeContext';
import { AppAction } from 'src/reducers/Reducer';
import { getAntDesignThemeConfig } from 'src/themes/AntDesignThemeConfig';
import Theme from 'src/themes/Theme';

interface ParamsToProvide {
  theme: Theme;
}

interface ProviderProps extends ParamsToProvide {
  dispatch: React.Dispatch<AppAction>;
  children: ReactElement;
}

/**
 * App provider.
 */
export default function Provider({ theme, dispatch, children }: ProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      <AntDesignProvider theme={getAntDesignThemeConfig(theme)}>
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </AntDesignProvider>
    </ThemeContext.Provider>
  );
}
