import Loadable from "@/routes/shared/Loadable";
import { useRouteInjector } from "@/routes/shared/useRouteInjector";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomeScreen = Loadable(lazy(() => import("@/modules/home/Home")));

export const useHomeRoutes = () => {
  const homeRoutes: RouteObject[] = [
    {
      path: "/home",
      element: <HomeScreen />,
    },
  ];

  useRouteInjector({
    publicRoutes: homeRoutes,
    moduleName: "HomeModule",
  });

  return homeRoutes;
};
