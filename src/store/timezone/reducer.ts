import { TIME_ZONE_TYPES, TimeZoneInitialState, TimeZoneAction } from './types';
import dummyTime from '../../libs/dummyTime.json';
import {TimeZones} from '../../constants/timeZone'

export const timeZoneInitialState = {
  isLoading: false,
  error: null,
  data: [...(TimeZones as any)]
} as TimeZoneInitialState;

export default function timeZoneReducer(
  state = timeZoneInitialState,
  action: TimeZoneAction
) {
  switch (action.type) {
    case TIME_ZONE_TYPES.TIME_ZONE_STARTED: {
      return { ...state, isLoading: true };
    }

    case TIME_ZONE_TYPES.TIME_ZONE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        timeZones: [...state.data, ...action.payload]
      };
    }

    case TIME_ZONE_TYPES.TIME_ZONE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
