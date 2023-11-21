import { IGetCard } from "@/models/IGetCard";

export enum GetCardActionTypes {
  GET_CARD = "GET_CARD",
  IS_LOADING_CARD = "IS_LOADING_CARD",
  GET_ERROR = "GET_ERROR",
}

export interface GetCardAction {
  type: GetCardActionTypes.GET_CARD;
  payload: IGetCard;
}

export interface IsLoadingCartAction {
  type: GetCardActionTypes.IS_LOADING_CARD;
  payload: boolean;
}

export interface GetErrorAction {
  type: GetCardActionTypes.GET_ERROR;
  payload: string;
}

export interface CardState {
  card: IGetCard;
  isLoading: boolean;
  error: string;
}

export type CardAction = GetCardAction | IsLoadingCartAction | GetErrorAction;
