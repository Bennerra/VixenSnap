import { IUser } from "@/models/IUser";
import {
  SetUserCardAction,
  SetUserMeAction,
  UserActionTypes,
} from "@/store/types/user";
import instance from "@/api/instance";
import { AppDispatch, RootState } from "@/store";
import { ThunkAction } from "redux-thunk";

export const setUserMeInfo = (user: IUser): SetUserMeAction => {
  return { type: UserActionTypes.SET_USER_ME_INFO, payload: user };
};

export const setUserCardInfo = (
  id: string
): ThunkAction<void, RootState, unknown, SetUserCardAction> => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await instance(`/users/${id}`, {
        method: "get",
      });
      dispatch({
        type: UserActionTypes.SET_USER_CARD_INFO,
        payload: response.data,
      });
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.log(e.message);
    }
  };
};
