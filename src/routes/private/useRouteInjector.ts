import { useEffect } from 'react';
import { RouteObject } from 'react-router-dom';
import RouteRegistry from './RouteRegistry';

interface UseRouteInjectorProps {
  privateRoutes?: RouteObject[];
  publicRoutes?: RouteObject[];
  moduleName: string;
}

export const useRouteInjector = ({ 
  privateRoutes = [], 
  publicRoutes = [], 
  moduleName 
}: UseRouteInjectorProps) => {

    if (privateRoutes.length > 0) {
      RouteRegistry.registerPrivateRoutes(moduleName, privateRoutes);
    }

    if (publicRoutes.length > 0) {
      RouteRegistry.registerPublicRoutes(moduleName, publicRoutes);
    }
};