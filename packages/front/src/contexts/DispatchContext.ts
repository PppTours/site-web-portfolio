import { createContext } from 'react';
import { AppAction } from 'src/reducers/Reducer';

export const DispatchContext = createContext<React.Dispatch<AppAction> | null>(null);
