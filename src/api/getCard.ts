import instance from "@/api/instance";
import { AppDispatch } from "@/store";
import { GetCard } from "@/store/action-creators/getCard";

export const getCard = async (
  id: string | undefined,
  dispatch: AppDispatch
) => {
  await instance(`/frames/${id}/`, {
    method: "get",
  }).then((response) => dispatch(GetCard(response.data)));
};
