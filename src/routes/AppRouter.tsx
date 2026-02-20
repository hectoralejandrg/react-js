import { useRoutes } from "react-router-dom";
import { useMemo } from "react";
import { useInitializeRoutes } from "./useInitializeRoutes";
import PrivateRoutes from "./private/PrivateRoutes";
import PublicRoutes from "./public/PublicRutes";

export default function AppRouter() {
  useInitializeRoutes();
  const privateRoutes = PrivateRoutes();
  const publicRoutes = PublicRoutes();
  const routes = useMemo(() => {
    return [publicRoutes, privateRoutes];
  }, [privateRoutes]);

  return useRoutes(routes);
}
