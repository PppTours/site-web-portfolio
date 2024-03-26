import { createContext } from 'react';
import { AppAction } from 'src/reducers/Reducer';

/**
 * Context for calling the reducer dispatch function anywhere in the application.
 */
export const DispatchContext = createContext<React.Dispatch<AppAction> | null>(null);
