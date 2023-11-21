import instance from "@/api/instance";

export const setLike = async (id: string) => {
  await instance(`/frames/${id}/like/`, {
    method: "post",
  });
};
