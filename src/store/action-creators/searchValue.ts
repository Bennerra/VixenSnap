import { SearchValueActionTypes } from "@/store/types/searchValue";

export const getSearchValue = (value: string) => {
  return { type: SearchValueActionTypes.SET_SEARCH_VALUE, payload: value };
};
