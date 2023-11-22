import {
  SearchValueAction,
  SearchValueActionTypes,
  SearchValueState,
} from "@/store/types/searchValue";

const initialState: SearchValueState = {
  searchValue: "",
};

export const getSearchValueReducer = (
  state = initialState,
  action: SearchValueAction
) => {
  switch (action.type) {
    case SearchValueActionTypes.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return { ...state };
  }
};
