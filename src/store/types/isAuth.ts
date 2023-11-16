export enum IsAuthActionPayloadTypes {
  IS_AUTH = "IS_AUTH",
}

export interface SetIsAuthAction {
  type: IsAuthActionPayloadTypes.IS_AUTH;
  payload: boolean;
}

export interface IsAuthState {
  isAuth: boolean;
}

export type IsAuthAction = SetIsAuthAction;
