import { useEffect, useMemo, useState } from "react";
import AuthGuard from "./private/AuthGuard";
import MainLayout from "./private/MainLayout";
import RouteRegistry from "./private/RouteRegistry";

const PrivateRoutes = () => {
    const [, setRouteUpdate] = useState(0);

    useEffect(() => {
        // Forzar re-render cada vez que cambien las rutas
        const timer = setTimeout(() => setRouteUpdate(prev => prev + 1), 0);
        return () => clearTimeout(timer);
    }, []);
    const dynamicRoutes = useMemo(() => {
        const routes = RouteRegistry.getPrivateRoutes();
        console.log('Dynamic routes:', routes);
        return routes;
    }, []);
    return {
        path: "/",
        element: (<AuthGuard><MainLayout /></AuthGuard>),
        children: [
            ...dynamicRoutes,
            {
                path: "/dashboard",
                element: <div>Dashboard</div>, // Reemplaza con tu componente
            },
            {
                path: "/*",
                element: <></>
            }
        ]
    }
}

export default PrivateRoutes