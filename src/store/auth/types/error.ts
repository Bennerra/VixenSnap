export enum ErrorActionTypes {
  FETCH_ERROR = "FETCH_ERROR",
}

interface FetchErrorAction {
  type: ErrorActionTypes.FETCH_ERROR;
  payload: string;
}

export interface ErrorState {
  error: string;
}

export type ErrorAction = FetchErrorAction;
