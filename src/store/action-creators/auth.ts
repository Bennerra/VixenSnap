import { ErrorActionTypes } from "@/store/types/error";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "@/store";
import { SetUserCardAction, UserActionTypes } from "@/store/types/user";
import instance from "@/api/instance";
import { ILoginForm } from "@/models/ILoginForm";
import { IRegistrationForm } from "@/models/IRegistrationForm";

export const registrationUser = (
  data: IRegistrationForm
): ThunkAction<void, RootState, unknown, SetUserCardAction> => {
  return async (dispatch: AppDispatch) => {
    try {
      await instance("/token/", {
        method: "post",
        data,
      });
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.SET_USER_CARD_INFO,
        payload: e.message,
      });
    }
  };
};

export const loginUser = (
  data: ILoginForm
): ThunkAction<void, RootState, unknown, SetUserCardAction> => {
  return async (dispatch: AppDispatch) => {
    try {
      await instance("/token/", {
        method: "post",
        data,
      });
    } catch (e: any) {
      dispatch({
        type: ErrorActionTypes.FETCH_LOGIN_ERROR,
        payload: e.message,
      });
    }
  };
};
