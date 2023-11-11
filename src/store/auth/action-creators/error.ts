import { ErrorActionTypes } from "@/store/auth/types/error";

export const fetchError = (error: string) => {
  return { type: ErrorActionTypes.FETCH_ERROR, payload: error };
};
