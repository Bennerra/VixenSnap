import { IUser } from "@/models/IUser";
import { SetUserAction, UserActionTypes } from "@/store/types/user";

export const setUserInfo = (user: IUser): SetUserAction => {
  return { type: UserActionTypes.SET_USER_INFO, payload: user };
};
