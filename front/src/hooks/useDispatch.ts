import { Dispatch, useContext } from 'react';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { AppAction } from 'src/reducers/Reducer';

export default function useDispatch(): Dispatch<AppAction> | null {
  return useContext(DispatchContext);
}
