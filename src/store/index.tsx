import React, { useReducer, useContext, FunctionComponent } from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';
import StoreContext, { ContextState } from './types';

import timeZoneReducer, { timeZoneInitialState } from './timezone/reducer';
import DLSReducer, { dlsInitialState } from './dls/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useCombinedReducers({
    timeZones: useReducer(timeZoneReducer, timeZoneInitialState),
    dlsState: useReducer(DLSReducer, dlsInitialState)
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

function useSelector<TSelected = unknown>(
  selector: (state: ContextState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
  const { store } = useContext(StoreContext);
  return selector(store);
}

const useStore = () => {
  const { store } = useContext(StoreContext);
  return store;
};

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};

export { StoreProvider, useStore, useDispatch, useSelector };
