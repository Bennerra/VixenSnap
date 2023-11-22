export enum SearchValueActionTypes {
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
}

export interface SetSearchValueAction {
  type: SearchValueActionTypes.SET_SEARCH_VALUE;
  payload: string;
}

export interface SearchValueState {
  searchValue: string;
}

export type SearchValueAction = SetSearchValueAction;
