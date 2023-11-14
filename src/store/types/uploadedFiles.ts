export enum UploadActionTypes {
  UPLOAD_FILES = "UPLOAD_FILES",
  DELETE_FILE = "DELETE_FILE",
}

export interface UploadFileAction {
  type: UploadActionTypes.UPLOAD_FILES;
  payload: File[];
}

export interface DeleteFileAction {
  type: UploadActionTypes.DELETE_FILE;
  payload: string;
}

export interface UploadState {
  uploadedFiles: File[];
}

export type UploadAction = UploadFileAction | DeleteFileAction;
