import {
  ClearFileForm,
  DeleteFileAction,
  UploadActionTypes,
  UploadFileAction,
} from "@/store/types/uploadedFiles";

export const uploadFile = (file: File[]): UploadFileAction => {
  return { type: UploadActionTypes.UPLOAD_FILES, payload: file };
};

export const deleteFile = (file: string): DeleteFileAction => {
  return { type: UploadActionTypes.DELETE_FILE, payload: file };
};

export const clearFileForm = (): ClearFileForm => {
  return { type: UploadActionTypes.CLEAR_FILE_FORM };
};
