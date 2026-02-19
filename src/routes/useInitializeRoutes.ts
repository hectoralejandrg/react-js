import { useUsersRoutes } from '../modules/users/route';

export const useInitializeRoutes = () => {
    // Inicializar todos los módulos de rutas aquí
    console.log('useInitializeRoutes called'); // <-- log
    useUsersRoutes();
    console.log('useUsersRoutes executed');
    // Agregar más módulos según sea necesario:
    // useProductsRoutes();
    // useOrdersRoutes();
};