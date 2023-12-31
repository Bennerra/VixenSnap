import {
  GetCardsActionTypes,
  ResetCardsAction,
  SetIsLoadingAction,
} from "@/store/types/getCards";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "@/store";
import { SetUserCardAction } from "@/store/types/user";
import instance from "@/api/instance";

export const setIsLoading = (isLoading: boolean): SetIsLoadingAction => {
  return { type: GetCardsActionTypes.SET_IS_LOADING, payload: isLoading };
};

export const setCards = (
  page: number
): ThunkAction<void, RootState, unknown, SetUserCardAction> => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await instance("/frames/", {
        method: "get",
        params: { page, count: 25 },
      });
      dispatch({
        type: GetCardsActionTypes.SET_CARDS,
        payload: response.data.results,
      });
      dispatch({
        type: GetCardsActionTypes.SET_TOTAL_COUNT,
        payload: response.data.total,
      });
    } catch (e: any) {
      dispatch({
        type: GetCardsActionTypes.SET_ERROR,
        payload: e.message,
      });
    }
  };
};

export const filterCards = (
  value: string
): ThunkAction<void, RootState, unknown, SetUserCardAction> => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await instance(`/frames/?name_startswith=${value}`, {
        method: "get",
        params: { count: 25 },
      });
      dispatch({
        type: GetCardsActionTypes.FILTER_CARDS,
        payload: {
          cards: response.data.results,
          totalCount: response.data.total,
        },
      });
    } catch (e: any) {
      dispatch({
        type: GetCardsActionTypes.SET_ERROR,
        payload: e.message,
      });
    }
  };
};

export const resetCards = (): ResetCardsAction => {
  return { type: GetCardsActionTypes.RESET_CARDS };
};
