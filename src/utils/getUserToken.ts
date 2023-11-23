import Cookies from "universal-cookie";

import { AppDispatch } from "@/store";
import { setIsAuth } from "@/store/action-creators/isAuth";

const cookies = new Cookies();

export const getUserToken = (dispatch: AppDispatch) => {
  const token = cookies.get("ob_");
  if (token) {
    dispatch(setIsAuth(true));
  }
};
