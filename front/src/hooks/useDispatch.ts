import { Dispatch, useContext } from 'react';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { AppAction } from 'src/reducers/Reducer';

/**
 * Hook to dispatch global reducer action in the app.
 * @returns {Dispatch<AppAction> | null} Application dispatcher.
 */
export default function useDispatch(): Dispatch<AppAction> | null {
  return useContext(DispatchContext);
}
