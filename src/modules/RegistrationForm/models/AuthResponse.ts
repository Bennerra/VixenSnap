import { IUser } from "@/modules/RegistrationForm/models/IUser";

export interface AuthResponse {
  token: string;
  user: IUser;
}
