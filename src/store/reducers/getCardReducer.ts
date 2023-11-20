import {
  CardAction,
  CardState,
  GetCardActionTypes,
} from "@/store/types/getCard";

const initialState: CardState = {
  card: {
    id: "",
    name: "",
    owner_id: "",
    short_url: "",
    description: "",
    likes: 0,
    is_liked: false,
    attachments: [],
  },
};

export const getCardReducer = (state = initialState, action: CardAction) => {
  switch (action.type) {
    case GetCardActionTypes.GET_CARD:
      return { ...state, card: action.payload };
    default:
      return { ...state };
  }
};
