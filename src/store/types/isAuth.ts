export enum IsAuthActionTypes {
  IS_AUTH = "IS_AUTH",
}

export interface SetIsAuthAction {
  type: IsAuthActionTypes.IS_AUTH;
  payload: boolean;
}

export interface IsAuthState {
  isAuth: boolean;
}

export type IsAuthAction = SetIsAuthAction;
