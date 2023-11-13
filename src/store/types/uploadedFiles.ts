export enum UploadActionTypes {
  UPLOAD_FILE = "UPLOAD_FILE",
  DELETE_FILE = "DELETE_FILE",
}

interface UploadFileAction {
  type: UploadActionTypes.UPLOAD_FILE;
  payload: string;
}

interface DeleteFileAction {
  type: UploadActionTypes.DELETE_FILE;
  payload: string;
}

export interface UploadState {
  uploadedFiles: string[];
}

export type UploadAction = UploadFileAction | DeleteFileAction;
