import './App.scss';

import { Reducer, useReducer } from 'react';

import { LanguagesEnum } from '../contexts/LanguageContext';
import Provider from '../providers/Provider';
import reducer, { AppAction, AppState } from '../reducers/Reducer';
import { ThemesEnum } from '../themes/ThemesEnum';
import Header from './components/Header/Header';

/**
 * Polybook app.
 */
export default function App() {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reducer, {
    theme: ThemesEnum.Light,
    language: LanguagesEnum.French
  });

  return (
    <Provider theme={state.theme} language={state.language} dispatch={dispatch}>
      <div className={`theme theme--${state.theme}`}>
        <div className="app">
          <Header />
        </div>
      </div>
    </Provider>
  );
}
