import instance from "@/api/instance";

export const getUser = async (id: string) => {
  await instance(`/users/${id}`, {
    method: "get",
  })
    .then((response) => console.log(response.data))
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e.message);
    });
};
