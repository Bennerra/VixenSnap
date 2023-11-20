import { IGetCard } from "@/models/IGetCard";
import { GetCardAction, GetCardActionTypes } from "@/store/types/getCard";

export const GetCard = (card: IGetCard): GetCardAction => {
  return { type: GetCardActionTypes.GET_CARD, payload: card };
};
