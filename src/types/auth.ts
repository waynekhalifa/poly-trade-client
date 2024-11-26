import { IUser } from "./user";

export interface ILoginInput {
  identifier: string;
  password: string;
}

export interface ILoginResult {
  jwt: string;
  user: IUser;
}

export interface IRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterResult {
  user: IUser;
}

export interface IForgotInput {
  email: string;
}

export interface IForgotResult {
  ok: boolean;
}

export interface IResetInput {
  passwordConfirmation: string;
  password: string;
  code: string;
}

export interface IChangePasswordInput {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}
