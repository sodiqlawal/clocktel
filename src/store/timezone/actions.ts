import {
  TIME_ZONE_TYPES,
  TIME_ZONE_ACTION_TYPES,
  TimeZoneAction,
  TimeZoneInterface
} from './types';
import { DispatchTypes } from '../types';
import { Dispatch } from 'react';

const getTimeZoneStarted = (): TimeZoneAction => ({
  type: TIME_ZONE_TYPES.TIME_ZONE_STARTED
});

const getTimeZoneSuccess = (payload: TimeZoneInterface[]): TimeZoneAction => ({
  type: TIME_ZONE_TYPES.TIME_ZONE_SUCCESS,
  payload
});

const getTimeZoneError = (error: string): TimeZoneAction => ({
  type: TIME_ZONE_TYPES.TIME_ZONE_ERROR,
  payload: error
});

export default async function timeZoneActions(
  dispatch: Dispatch<DispatchTypes>,
  actionType: string,
  payload?: string
) {
  // test calling for more post
  dispatch(getTimeZoneStarted());

  switch (actionType) {
    case TIME_ZONE_ACTION_TYPES.FETCH_ALL_TIME_ZONE:
      try {
        // fetch all time zones from URL
      } catch (error) {
        dispatch(getTimeZoneError(error.message));
      }
      break;

    default:
      break;
  }
}
