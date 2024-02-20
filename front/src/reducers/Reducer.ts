import { LanguagesEnum } from '../contexts/LanguageContext';
import { ThemesEnum } from '../themes/ThemesEnum';
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

export default function reducer(state: AppState, action: AppAction) {
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
