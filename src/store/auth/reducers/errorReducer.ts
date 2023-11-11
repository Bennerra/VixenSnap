import {
  ErrorAction,
  ErrorActionTypes,
  ErrorState,
} from "@/store/auth/types/error";

const initialState: ErrorState = {
  error: "",
};

export const errorReducer = (state = initialState, action: ErrorAction) => {
  switch (action.type) {
    case ErrorActionTypes.FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
