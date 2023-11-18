import { IGetCards } from "@/models/IGetCards";

export enum GetCardsActionTypes {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_CARDS = "SET_CARDS",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsLoadingAction {
  type: GetCardsActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export interface SetCardsAction {
  type: GetCardsActionTypes.SET_CARDS;
  payload: IGetCards[];
}

export interface SetErrorAction {
  type: GetCardsActionTypes.SET_ERROR;
  payload: string;
}

export interface GetCardsState {
  isLoading: boolean;
  cards: IGetCards[];
  error: string;
}

export type GetCardsAction =
  | SetIsLoadingAction
  | SetCardsAction
  | SetErrorAction;
