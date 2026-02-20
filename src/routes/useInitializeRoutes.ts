import { useHomeRoutes } from "@/modules/home/routes";
import { useUsersRoutes } from "@/modules/users/routes";

export const useInitializeRoutes = () => {
    // Inicializar todos los módulos de rutas aquí
    useUsersRoutes();
    useHomeRoutes();
};