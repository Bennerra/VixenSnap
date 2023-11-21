import { IUser } from "@/models/IUser";

export enum UserActionTypes {
  SET_USER_ME_INFO = "SET_USER_ME_INFO",
  SET_USER_CARD_INFO = "SET_USER_CARD_INFO",
}

export interface SetUserMeAction {
  type: UserActionTypes.SET_USER_ME_INFO;
  payload: IUser;
}

export interface SetUserCardAction {
  type: UserActionTypes.SET_USER_CARD_INFO;
  payload: IUser;
}

export interface UserState {
  userMeInfo: IUser;
  userCardInfo: IUser;
}

export type UserAction = SetUserMeAction | SetUserCardAction;
