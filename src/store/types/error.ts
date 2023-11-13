export enum ErrorActionTypes {
  FETCH_REGISTRATION_ERROR = "FETCH_REGISTRATION_ERROR",
  FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR",
}

interface FetchRegistrationErrorAction {
  type: ErrorActionTypes.FETCH_REGISTRATION_ERROR;
  payload: string;
}

interface FetchLoginErrorAction {
  type: ErrorActionTypes.FETCH_LOGIN_ERROR;
  payload: string;
}

export interface ErrorState {
  registrationError: string;
  loginError: string;
}

export type ErrorAction = FetchRegistrationErrorAction | FetchLoginErrorAction;
