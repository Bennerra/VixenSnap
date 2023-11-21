import { UserAction, UserActionTypes, UserState } from "@/store/types/user";

const initialState: UserState = {
  userMeInfo: {
    avatar: null,
    email: "",
    id: "",
    name: "",
    registration_date: "",
    username: "",
  },
  userCardInfo: {
    avatar: null,
    email: "",
    id: "",
    name: "",
    registration_date: "",
    username: "",
  },
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_ME_INFO:
      return { ...state, userMeInfo: action.payload };
    case UserActionTypes.SET_USER_CARD_INFO:
      return { ...state, userCardInfo: action.payload };
    default:
      return state;
  }
};
