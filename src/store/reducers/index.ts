import { combineReducers } from "redux";

import { errorReducer } from "@/store/reducers/errorReducer";
import { uploadFilesReducer } from "@/store/reducers/uploadFilesReducer";
import { isAuthReducer } from "@/store/reducers/isAuthReducer";
import { getCardsReducer } from "@/store/reducers/getCardsReducer";

export const rootReducer = combineReducers({
  error: errorReducer,
  files: uploadFilesReducer,
  isAuth: isAuthReducer,
  cards: getCardsReducer,
});
