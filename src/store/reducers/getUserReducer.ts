import { UserAction, UserActionTypes, UserState } from "@/store/types/user";

const initialState: UserState = {
  userInfo: {
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
    case UserActionTypes.SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
