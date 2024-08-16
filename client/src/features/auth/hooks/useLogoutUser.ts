import { useLazyQuery } from "@apollo/client";
import { LOGOUT } from "../graphql";
import { LogoutResponse } from "../types";
import { StorageService } from "../../../store/StorageService";
import { useSetUser } from "../../../store/hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../router/route-path.enum";

export function useLogoutUser() {
  const setUser = useSetUser();

  const navigate = useNavigate();

  const [logout, { loading }] = useLazyQuery<LogoutResponse>(LOGOUT);

  const logoutUser = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      StorageService.removeAccessToken();

      setUser(null);

      navigate(RoutePaths.SIGN_IN);
    }
  };

  return { logoutUser, loading };
}
