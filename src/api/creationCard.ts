import instance from "@/api/instance";

export const creationCard = async (data: FormData) => {
  await instance("/frames/", {
    method: "post",
    data,
  }).catch((e) => {
    // eslint-disable-next-line
    console.log(e);
  });
};
