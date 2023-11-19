import instance from "@/api/instance";

export const pagination = async (data: {}) => {
  await instance("/frames/", {
    method: "post",
    data,
  }).catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });
};
