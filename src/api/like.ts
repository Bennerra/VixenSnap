import instance from "@/api/instance";

export const setLike = async (id: string) => {
  await instance(`/like/${id}`, {
    method: "post",
  });
};
