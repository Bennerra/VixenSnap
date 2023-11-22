import { IGetCards } from "@/models/IGetCards";

export enum GetCardsActionTypes {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_CARDS = "SET_CARDS",
  SET_ERROR = "SET_ERROR",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  FILTER_CARDS = "FILTER_CARDS",
  RESET_CARDS = "RESET_CARDS",
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
export interface SetTotalCountAction {
  type: GetCardsActionTypes.SET_TOTAL_COUNT;
  payload: number;
}

export interface FilterCardsAction {
  type: GetCardsActionTypes.FILTER_CARDS;
  payload: { cards: IGetCards[]; totalCount: number };
}

export interface ResetCardsAction {
  type: GetCardsActionTypes.RESET_CARDS;
}

export interface GetCardsState {
  isLoading: boolean;
  cards: IGetCards[];
  error: string;
  page: number;
  totalCount: number;
}

export type GetCardsAction =
  | SetIsLoadingAction
  | SetCardsAction
  | SetErrorAction
  | SetTotalCountAction
  | FilterCardsAction
  | ResetCardsAction;
