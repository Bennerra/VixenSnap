import instance from "@/api/instance";
import { SetCards } from "@/store/action-creators/getCards";
import { AppDispatch } from "@/store";

export const getCards = async (dispatch: AppDispatch) => {
  await instance("/frames/", {
    method: "get",
  })
    .then((response) => dispatch(SetCards(response.data)))
    .catch((e) => {
      // eslint-disable-next-line
		console.log(e);
    });
};
