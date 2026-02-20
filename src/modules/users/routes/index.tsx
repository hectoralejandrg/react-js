import { RouteObject } from "react-router-dom";
import { useRouteInjector } from "@/routes/shared/useRouteInjector";

export const useUsersRoutes = () => {
  const userRoutes: RouteObject[] = [
    {
      path: "/users",
      children: [
        {
          path: "",
          element: <>Usuario</>,
        },
      ],
    },
  ];

  useRouteInjector({
    privateRoutes: userRoutes,
    moduleName: "UsersModule",
  });

  return userRoutes;
};
