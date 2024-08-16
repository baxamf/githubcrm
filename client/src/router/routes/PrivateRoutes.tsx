import { RouteObject } from "react-router-dom";
import RouteGuard from "../RouteGuard";
import MainLayout from "../../layouts/MainLayout";
import { RoutePaths } from "../route-path.enum";
import { lazy } from "react";

const Projects = lazy(() => import("../../features/projects/pages/Projects"));

export default function PrivateRoutes(): RouteObject[] {
  return [
    {
      element: (
        <RouteGuard>
          <MainLayout />
        </RouteGuard>
      ),
      path: RoutePaths.HOME,
      children: [
        {
          index: true,
          element: <Projects />,
        },
      ],
    },
  ];
}
