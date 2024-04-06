import { Reducer, Suspense, useReducer } from 'react';

import TemplatePage from './pages/Template/TemplatePage';
import Provider from './providers/Provider';
import reducer, { AppAction, AppState } from './reducers/Reducer';
import { ThemesEnum } from './themes/ThemesEnum';

export default function App() {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reducer, {
    theme: ThemesEnum.Light
  });

  return (
    <Suspense fallback="">
      <Provider theme={state.theme} dispatch={dispatch}>
        <div className={`theme theme--${state.theme}`}>
          <TemplatePage />
        </div>
      </Provider>
    </Suspense>
  );
}
