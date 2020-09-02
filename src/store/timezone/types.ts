/*
 **************************************************************
 ********************** TIME ZONE TYPES  **********************
 **************************************************************
 */

// TIME ZONE TYPES
export enum TIME_ZONE_TYPES {
  TIME_ZONE_STARTED = 'TIME_ZONE_STARTED',
  TIME_ZONE_SUCCESS = 'TIME_ZONE_SUCCESS',
  TIME_ZONE_ERROR = 'TIME_ZONE_ERROR'
}

export enum TIME_ZONE_ACTION_TYPES {
  FETCH_ALL_TIME_ZONE = 'FETCH_ALL_TIME_ZONE',
  PAGINATE_TIME_ZONE = 'PAGINATE_TIME_ZONE'
}

// TYPESCRIPT TYPES
export type TimeZoneInitialState = {
  isLoading: boolean;
  error?: string | null;
  data: TimeZoneInterface[];
};

export type TimeZoneInterface = {
  abbreviation: string;
  client_ip: string;
  datetime: Date;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number | null;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: Date;
  utc_offset: string;
  week_number: number;
};

export type TimeZoneAction =
  | { type: TIME_ZONE_TYPES.TIME_ZONE_STARTED }
  | {
      type: TIME_ZONE_TYPES.TIME_ZONE_SUCCESS;
      payload: TimeZoneInterface[];
    }
  | { type: TIME_ZONE_TYPES.TIME_ZONE_ERROR; payload: string | null };
