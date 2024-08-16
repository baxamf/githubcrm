import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../store/hooks/useUser";
import { RoutePaths } from "./route-path.enum.ts";

interface IRouteGuard {
  children: JSX.Element;
}

export default function RouteGuard({ children }: IRouteGuard) {
  const location = useLocation();
  const user = useUser();

  if (!user) {
    return (
      <Navigate to={RoutePaths.SIGN_IN} state={{ from: location }} replace />
    );
  }

  return children;
}
