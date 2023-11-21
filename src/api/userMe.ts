import instance from "@/api/instance";
import { AppDispatch } from "@/store";
import { setUserMeInfo } from "@/store/action-creators/user";

export const getUserMe = async (dispatch: AppDispatch) => {
  await instance("/users/me", {
    method: "get",
  })
    .then((response) => dispatch(setUserMeInfo(response.data)))
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e.message);
    });
};
