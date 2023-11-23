import instance from "@/api/instance";
import { IOAuthUser } from "@/models/IOAuthUser";

export const oAuthUser = async (data: IOAuthUser) => {
  await instance("/token/oauth/", {
    method: "post",
    data,
  });
};
