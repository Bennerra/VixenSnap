export enum UploadActionTypes {
  UPLOAD_FILES = "UPLOAD_FILES",
  DELETE_FILE = "DELETE_FILE",
  CLEAR_FILE_FORM = "CLEAR_FILE_FORM",
}

export interface UploadFileAction {
  type: UploadActionTypes.UPLOAD_FILES;
  payload: File[];
}

export interface DeleteFileAction {
  type: UploadActionTypes.DELETE_FILE;
  payload: string;
}

export interface ClearFileForm {
  type: UploadActionTypes.CLEAR_FILE_FORM;
}

export interface UploadState {
  uploadedFiles: File[];
}

export type UploadAction = UploadFileAction | DeleteFileAction | ClearFileForm;
