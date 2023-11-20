import { IUser } from "@/models/IUser";

export enum UserActionTypes {
  SET_USER_INFO = "SET_USER_INFO",
}

export interface SetUserAction {
  type: UserActionTypes.SET_USER_INFO;
  payload: IUser;
}

export interface UserState {
  userInfo: IUser;
}

export type UserAction = SetUserAction;
