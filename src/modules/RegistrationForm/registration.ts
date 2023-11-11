import instance from "@/api/instance";
import { fetchRegistrationError } from "@/store/auth/action-creators/error";
import { AppDispatch } from "@/store/auth";

export const registrationUser = async (data: {}, dispatch: AppDispatch) => {
  await instance("/token/create/", {
    method: "post",
    data,
  }).catch((e) => {
    dispatch(
      fetchRegistrationError("Пользователь с таким email уже зарегистрирован")
    );
    // eslint-disable-next-line
    console.log(e);
  });
};
