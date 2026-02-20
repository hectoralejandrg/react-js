import GuestGuard from "./GuestGuard";
import MinimalLayout from "./MinimalLayout";
import RouteRegistry from "../shared/RouteRegistry";
import { Navigate } from "react-router-dom";

// const LoginScreen = Loadable(lazy(() => import("@/modules/home/Home")))

const PublicRoutes = () => {
  const dynamicRoutes = RouteRegistry.getPublicRoutes();

  return {
    path: "/",
    element: (
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    ),
    children: [
      ...dynamicRoutes,
      {
        path: "/login",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/*",
        element: <Navigate to="/home" replace />,
      },
    ],
  };
};

export default PublicRoutes;
