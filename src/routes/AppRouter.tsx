import { useRoutes } from "react-router-dom";
import { useMemo } from "react";
import PublicRoutes from "./PublicRutes";
import PrivateRoutes from "./PrivateRoutes";
import { useInitializeRoutes } from "./useInitializeRoutes";


export default function AppRouter() {
  useInitializeRoutes(); 
  const privateRoutes = PrivateRoutes();
  const routes = useMemo(() => {
    return [
      PublicRoutes, 
      privateRoutes
    ];
  }, [privateRoutes]);

  return useRoutes(routes);
}