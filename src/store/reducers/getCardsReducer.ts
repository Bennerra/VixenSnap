import {
  GetCardsAction,
  GetCardsActionTypes,
  GetCardsState,
} from "@/store/types/getCards";

const initialState: GetCardsState = {
  isLoading: false,
  cards: [],
  error: "",
};

export const getCardsReducer = (
  state = initialState,
  action: GetCardsAction
) => {
  switch (action.type) {
    case GetCardsActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: true };
    case GetCardsActionTypes.SET_CARDS:
      return { ...state, isLoading: false, cards: action.payload };
    case GetCardsActionTypes.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
