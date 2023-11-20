import instance from "@/api/instance";
import {
  SetCards,
  SetError,
  SetTotalCount,
} from "@/store/action-creators/getCards";
import { AppDispatch } from "@/store";

export const getCards = async (page: number, dispatch: AppDispatch) => {
  await instance("/frames/", {
    method: "get",
    params: { page },
  })
    .then((response) => {
      dispatch(SetCards(response.data.results));
      dispatch(SetTotalCount(response.data.total));
    })
    .catch((e) => {
      dispatch(SetError(e.message));
    });
};
