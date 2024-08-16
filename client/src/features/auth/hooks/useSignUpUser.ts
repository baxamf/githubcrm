import { useNavigate } from "react-router-dom";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql";
import { StorageService } from "../../../store/StorageService";
import { RoutePaths } from "../../../router/route-path.enum";
import {
  CreateUserInput,
  CreateUserResponse,
  CreateUserVariables,
} from "../types";

export function useSignUpUser() {
  const setUser = useSetUser();
  const navigate = useNavigate();

  const [signUp, { error }] = useMutation<
    CreateUserResponse,
    CreateUserVariables
  >(SIGN_UP, {
    onCompleted({ createUser }) {
      StorageService.setAccessToken(createUser.accessToken);

      navigate(RoutePaths.HOME);

      setUser(createUser.user);
    },
  });

  const signUpUser = async (createUserInput: CreateUserInput) => {
    await signUp({
      variables: { createUserInput },
    });
  };

  return { signUpUser, errorMessage: error?.message };
}
