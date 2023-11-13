import { ErrorActionTypes } from "@/store/types/error";

export const fetchRegistrationError = (error: string) => {
  return { type: ErrorActionTypes.FETCH_REGISTRATION_ERROR, payload: error };
};

export const fetchLoginError = (error: string) => {
  return { type: ErrorActionTypes.FETCH_LOGIN_ERROR, payload: error };
};
