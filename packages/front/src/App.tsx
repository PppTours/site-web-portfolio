import { ReactElement, Reducer, Suspense, useReducer } from 'react';

import Provider from './providers/Provider';
import reducer, { AppAction, AppState } from './reducers/Reducer';
import Theme from './themes/Theme';

interface AppProps {
  children: ReactElement;
}

export default function App({ children }: AppProps) {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reducer, {
    theme: getUserTheme()
  });

  function getUserTheme(): Theme {
    const isDarkTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return isDarkTheme ? Theme.Dark : Theme.Light;
  }

  return (
    <Suspense fallback="">
      <Provider theme={state.theme} dispatch={dispatch}>
        {children}
      </Provider>
    </Suspense>
  );
}
