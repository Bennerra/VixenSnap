import { combineReducers } from "redux";

import { errorReducer } from "@/store/reducers/errorReducer";
import { uploadFilesReducer } from "@/store/reducers/uploadFilesReducer";

export const rootReducer = combineReducers({
  error: errorReducer,
  files: uploadFilesReducer,
});
