import {
  UploadAction,
  UploadActionTypes,
  UploadState,
} from "@/store/types/uploadedFiles";

const initialState: UploadState = {
  uploadedFiles: [],
};

export const uploadFilesReducer = (
  state = initialState,
  action: UploadAction
) => {
  switch (action.type) {
    case UploadActionTypes.UPLOAD_FILES:
      return {
        ...state,
        uploadedFiles: [...state.uploadedFiles, ...action.payload],
      };
    case UploadActionTypes.DELETE_FILE:
      return {
        ...state,
        uploadedFiles: state.uploadedFiles.filter(
          (file) => file.name !== action.payload
        ),
      };
    case UploadActionTypes.CLEAR_FILE_FORM:
      return { ...state, uploadedFiles: [] };
    default:
      return state;
  }
};
