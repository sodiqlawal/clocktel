import { DLS_ACTION_TYPES, DLSInitialState, DLSAction } from "./types";

export const dlsInitialState = { status: false } as DLSInitialState;

export default function DLSReducer(state = dlsInitialState, action: DLSAction) {
  switch (action.type) {
    case DLS_ACTION_TYPES.DLS_DAY_TIME: {
      return { ...state, status: true };
    }

    case DLS_ACTION_TYPES.DLS_NIGHT: {
      return { ...state, status: false };
    }

    default:
      return state;
  }
}
