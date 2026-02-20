import AuthGuard from "./AuthGuard";
import MainLayout from "./MainLayout";
import RouteRegistry from "../shared/RouteRegistry";

const PrivateRoutes = () => {
  const dynamicRoutes = RouteRegistry.getPrivateRoutes();

  return {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      ...dynamicRoutes,
      {
        path: "/dashboard",
        element: <div>Dashboard</div>, // Reemplaza con tu componente
      },
      {
        path: "/*",
        element: <></>,
      },
    ],
  };
};

export default PrivateRoutes;
