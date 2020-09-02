/*
 **************************************************************
 ********************** DSL ZONE TYPES  ***********************
 **************************************************************
 */

// DAY LIGHT SAVING ACTION TYPES
export enum DLS_ACTION_TYPES {
  DLS_DAY_TIME = "DLS_DAY_TIME",
  DLS_NIGHT = "DLS_NIGHT",
}

// TYPESCRIPT TYPES
export type DLSInitialState = { status: boolean };

export type DLSAction =
  | { type: DLS_ACTION_TYPES.DLS_DAY_TIME }
  | { type: DLS_ACTION_TYPES.DLS_NIGHT };
