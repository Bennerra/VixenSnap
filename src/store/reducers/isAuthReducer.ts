import {
  IsAuthAction,
  IsAuthActionTypes,
  IsAuthState,
} from "@/store/types/isAuth";

const initialState: IsAuthState = {
  isAuth: false,
};

export const isAuthReducer = (state = initialState, action: IsAuthAction) => {
  switch (action.type) {
    case IsAuthActionTypes.IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
