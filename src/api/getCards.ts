import instance from "@/api/instance";
import { SetCards, SetError } from "@/store/action-creators/getCards";
import { AppDispatch } from "@/store";

export const getCards = async (dispatch: AppDispatch) => {
  await instance("/frames/", {
    method: "get",
  })
    .then((response) => dispatch(SetCards(response.data.results)))
    .catch((e) => {
      dispatch(SetError(e.message));
    });
};
