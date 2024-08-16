import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loading from "../common/components/loading/Loading";
import { RoutePaths } from "./route-path.enum";
import PrivateRoutes from "./routes/PrivateRoutes";

const SignIn = lazy(() => import("../features/auth/pages/SignIn"));
const SignUp = lazy(() => import("../features/auth/pages/SignUp"));
const ErrorPage = lazy(() => import("../common/pages/ErrorPage"));

export default function Router() {
  return createBrowserRouter([
    ...PrivateRoutes(),
    {
      path: RoutePaths.SIGN_IN,
      element: (
        <Suspense fallback={<Loading />}>
          <SignIn />
        </Suspense>
      ),
    },
    {
      path: RoutePaths.SIGN_UP,
      element: (
        <Suspense fallback={<Loading />}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "/*",
      element: (
        <Suspense fallback={<Loading />}>
          <ErrorPage message="Something goes wrong" />
        </Suspense>
      ),
    },
  ]);
}
