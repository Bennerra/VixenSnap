import { IGetCard } from "@/models/IGetCard";

export enum GetCardActionTypes {
  GET_CARD = "GET_CARD",
}

export interface GetCardAction {
  type: GetCardActionTypes.GET_CARD;
  payload: IGetCard;
}

export interface CardState {
  card: IGetCard;
}

export type CardAction = GetCardAction;
