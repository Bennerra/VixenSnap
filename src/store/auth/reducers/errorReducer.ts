import {
  ErrorAction,
  ErrorActionTypes,
  ErrorState,
} from "@/store/auth/types/error";

const initialState: ErrorState = {
  registrationError: "",
  loginError: "",
};

export const errorReducer = (state = initialState, action: ErrorAction) => {
  switch (action.type) {
    case ErrorActionTypes.FETCH_REGISTRATION_ERROR:
      return { ...state, registrationError: action.payload };
    case ErrorActionTypes.FETCH_LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};
