import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql";
import { LoginInput, LoginResponse, LoginVariables } from "../types";
import { StorageService } from "../../../store/StorageService";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/route-path.enum";

export const useLoginUser = () => {
  const setUser = useSetUser();
  const navigate = useNavigate();

  const [login, { loading: loginLoading, error: loginError }] = useMutation<
    LoginResponse,
    LoginVariables
  >(LOGIN, {
    onCompleted({ login }) {
      StorageService.setAccessToken(login.accessToken);

      navigate(RoutePaths.HOME);

      setUser(login.user);
    },
  });

  const loginUser = async (loginInput: LoginInput) => {
    await login({
      variables: { loginInput },
    });
  };

  return { loginUser, loginLoading, loginError };
};
