import {
  ErrorActionTypes,
  FetchLoginErrorAction,
  FetchRegistrationErrorAction,
} from "@/store/types/error";

export const fetchRegistrationError = (
  error: string
): FetchRegistrationErrorAction => {
  return { type: ErrorActionTypes.FETCH_REGISTRATION_ERROR, payload: error };
};

export const fetchLoginError = (error: string): FetchLoginErrorAction => {
  return { type: ErrorActionTypes.FETCH_LOGIN_ERROR, payload: error };
};
