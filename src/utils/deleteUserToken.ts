import Cookies from "universal-cookie";

import { AppDispatch } from "@/store";
import { setIsAuth } from "@/store/action-creators/isAuth";

const cookies = new Cookies();

export const deleteUserToken = (dispatch: AppDispatch) => {
  cookies.remove("ob_");
  dispatch(setIsAuth(false));
};
