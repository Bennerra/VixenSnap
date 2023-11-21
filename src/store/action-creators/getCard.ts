import { IGetCard } from "@/models/IGetCard";
import {
  GetCardAction,
  GetCardActionTypes,
  GetErrorAction,
  IsLoadingCartAction,
} from "@/store/types/getCard";

export const GetCard = (card: IGetCard): GetCardAction => {
  return { type: GetCardActionTypes.GET_CARD, payload: card };
};

export const SetIsLoading = (isLoading: boolean): IsLoadingCartAction => {
  return { type: GetCardActionTypes.IS_LOADING_CARD, payload: isLoading };
};

export const SetError = (error: string): GetErrorAction => {
  return { type: GetCardActionTypes.GET_ERROR, payload: error };
};
