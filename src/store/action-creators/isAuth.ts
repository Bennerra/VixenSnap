import { IsAuthActionTypes, SetIsAuthAction } from "@/store/types/isAuth";

export const setIsAuth = (isAuthState: boolean): SetIsAuthAction => {
  return { type: IsAuthActionTypes.IS_AUTH, payload: isAuthState };
};
