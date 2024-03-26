import { LanguagesEnum } from 'src/contexts/LanguageContext';
import { ThemesEnum } from 'src/themes/ThemesEnum';

import { ReducerActionsEnum } from './ReducerActionsEnum';

/**
 * Application state.
 */
export interface AppState {
  theme: ThemesEnum;
  language: LanguagesEnum;
}

/**
 * Random action.
 */
interface Action {
  type: ReducerActionsEnum;
  content: number;
}

/**
 * Theme action.
 */
interface ThemeAction extends Omit<Action, 'content'> {
  type: ReducerActionsEnum.SetTheme;
  content: ThemesEnum;
}

/**
 * Language action.
 */
interface LanguageAction extends Omit<Action, 'content'> {
  type: ReducerActionsEnum.SetLanguage;
  content: LanguagesEnum;
}

/**
 * Application action.
 */
export type AppAction = ThemeAction | LanguageAction;

/**
 * Global reducer of the app.
 * @param {AppState} state Current state of the app.
 * @param {AppAction} action Action to execute.
 * @returns {AppState} New state of the app.
 */
export default function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case ReducerActionsEnum.SetTheme:
      return {
        ...state,
        theme: action.content
      };
    case ReducerActionsEnum.SetLanguage:
      return {
        ...state,
        language: action.content
      };
  }
}
