import { Dispatch } from 'react';
import { DLS_ACTION_TYPES, DLSAction } from './types';
import { DispatchTypes } from '../types';

const dslToDayLight = (): DLSAction => ({
  type: DLS_ACTION_TYPES.DLS_DAY_TIME
});

const dslToNight = (): DLSAction => ({
  type: DLS_ACTION_TYPES.DLS_NIGHT
});

export default function DLSActions(
  dispatch: Dispatch<DispatchTypes>,
  payload?: string | boolean
) {
  // Do logical calculations based on the dsl passed as payload
  const actionType = payload
    ? DLS_ACTION_TYPES.DLS_NIGHT
    : DLS_ACTION_TYPES.DLS_DAY_TIME;

  switch (actionType) {
    case DLS_ACTION_TYPES.DLS_DAY_TIME:
      dispatch(dslToDayLight());
      break;

    case DLS_ACTION_TYPES.DLS_NIGHT:
      dispatch(dslToNight());
      break;

    default:
      break;
  }
}
