import { createContext, useContext } from 'react';
import { AppAction } from 'reducers/Reducer';

/**
 * Context for calling the reducer dispatch function anywhere in the application.
 */
export const DispatchContext = createContext<React.Dispatch<AppAction> | null>(null);

export const useDispatch = () => useContext(DispatchContext);
