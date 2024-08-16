import { User } from "../../store/StoreProvider";

export type UserResponse = { accessToken: string; user: User };

export type LoginResponse = {
  login: UserResponse;
};

export type UserInput = {
  email: string;
  password: string;
};

export type LoginInput = UserInput;

export type LoginVariables = { loginInput: LoginInput };

export type LogoutResponse = {
  logout: { message: string };
};

export type CreateUserInput = UserInput;

export type CreateUserVariables = { createUserInput: CreateUserInput };

export type CreateUserResponse = {
  createUser: UserResponse;
};
