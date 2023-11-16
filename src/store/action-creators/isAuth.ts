import {
  IsAuthActionPayloadTypes,
  SetIsAuthAction,
} from "@/store/types/isAuth";

export const setIsAuth = (isAuthState: boolean): SetIsAuthAction => {
  return { type: IsAuthActionPayloadTypes.IS_AUTH, payload: isAuthState };
};
