import Theme from 'src/themes/Theme';

import { ReducerActionsEnum } from './ReducerActionsEnum';

export interface AppState {
  theme: Theme;
}

interface Action {
  type: ReducerActionsEnum;
  content: number;
}

interface ThemeAction extends Omit<Action, 'content'> {
  type: ReducerActionsEnum.SetTheme;
  content: Theme;
}

export type AppAction = ThemeAction;

export default function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case ReducerActionsEnum.SetTheme:
      return {
        ...state,
        theme: action.content
      };
  }
}
