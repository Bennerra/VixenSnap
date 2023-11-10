import instance from "@/api/instance";

export const loginUser = async (data: {}) => {
  await instance("/token/", {
    method: "post",
    data,
  }).catch((e) => {
    // eslint-disable-next-line
    console.log(e);
  });
};
