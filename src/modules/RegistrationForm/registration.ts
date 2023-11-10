import instance from "@/api/instance";

export const registrationUser = async (data: {}) => {
  await instance("/token/create/", {
    method: "post",
    data,
  }).catch((e) => {
    // eslint-disable-next-line
    console.log(e);
  });
};
