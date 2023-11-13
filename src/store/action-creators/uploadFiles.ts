import { UploadActionTypes } from "@/store/types/uploadedFiles";

export const uploadFile = (file: string) => {
  return { type: UploadActionTypes.UPLOAD_FILE, payload: file };
};

export const deleteFile = (file: string) => {
  return { type: UploadActionTypes.DELETE_FILE, payload: file };
};
