import instance from "@/api/instance";
import { AppDispatch } from "@/store";
import { setUserInfo } from "@/store/action-creators/user";

export const getUser = async (dispatch: AppDispatch) => {
  await instance("/users/me", {
    method: "get",
  })
    .then((response) => dispatch(setUserInfo(response.data)))
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e.message);
    });
};
