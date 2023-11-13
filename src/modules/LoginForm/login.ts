import instance from "@/api/instance";
import { AppDispatch } from "@/store";
import { fetchLoginError } from "@/store/action-creators/error";

export const loginUser = async (data: {}, dispatch: AppDispatch) => {
  await instance("/token/", {
    method: "post",
    data,
  }).catch((e) => {
    dispatch(fetchLoginError("Неверный логин или пароль"));
    // eslint-disable-next-line
    console.log(e);
  });
};
