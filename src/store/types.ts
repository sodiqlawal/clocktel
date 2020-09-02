import { createContext, Dispatch } from 'react';

import { timeZoneInitialState } from './timezone/reducer';
import { dlsInitialState } from './dls/reducer';

import { TimeZoneInitialState, TimeZoneAction } from './timezone/types';
import { DLSInitialState, DLSAction } from './dls/types';

// We define our type for the context properties right here
export type DispatchTypes = TimeZoneAction | DLSAction;

// We define our type for the context state
export interface ContextState {
  timeZones: TimeZoneInitialState;
  dlsState: DLSInitialState;
}

// We define our type for the context properties right here
interface ContextProps {
  store: ContextState;
  dispatch: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: { timeZones: timeZoneInitialState, dlsState: dlsInitialState },
  dispatch: () => {}
});

export default StoreContext;
