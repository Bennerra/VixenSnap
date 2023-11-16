import {
  IsAuthAction,
  IsAuthActionPayloadTypes,
  IsAuthState,
} from "@/store/types/isAuth";

const initialState: IsAuthState = {
  isAuth: false,
};

export const isAuthReducer = (state = initialState, action: IsAuthAction) => {
  switch (action.type) {
    case IsAuthActionPayloadTypes.IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
