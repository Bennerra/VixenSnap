import {
  GetCardsActionTypes,
  SetCardsAction,
  SetErrorAction,
  SetIsLoadingAction,
} from "@/store/types/getCards";
import { IGetCards } from "@/models/IGetCards";

export const SetIsLoading = (isLoading: boolean): SetIsLoadingAction => {
  return { type: GetCardsActionTypes.SET_IS_LOADING, payload: isLoading };
};

export const SetCards = (cards: IGetCards[]): SetCardsAction => {
  return { type: GetCardsActionTypes.SET_CARDS, payload: cards };
};

export const SetError = (error: string): SetErrorAction => {
  return { type: GetCardsActionTypes.SET_ERROR, payload: error };
};
