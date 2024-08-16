import { gql } from "@apollo/client";

export const LOGIN = gql(`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      user {
        id
        email
      }
    }
  }
`);

export const LOGOUT = gql(`
  query Logout {
      logout {
          message
      }
  }  
`);

export const SIGN_UP = gql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
          accessToken
          user {
              id
              email
          }
      }
  }
`);
