import { RouteObject } from 'react-router-dom';

class RouteRegistry {
  private static instance: RouteRegistry;
  private privateMap: Record<string, RouteObject[]> = {};
  private publicMap: Record<string, RouteObject[]> = {};

  private constructor() {} // constructor privado para singleton

  static getInstance(): RouteRegistry {
    if (!RouteRegistry.instance) {
      RouteRegistry.instance = new RouteRegistry();
    }
    return RouteRegistry.instance;
  }

  registerPrivateRoutes(moduleName: string, routes: RouteObject[]): void {
    if (!routes || routes.length === 0) return;
    this.privateMap[moduleName] = routes;
    console.log(`✓ Rutas privadas registradas para: ${moduleName}`);
  }

  registerPublicRoutes(moduleName: string, routes: RouteObject[]): void {
    if (!routes || routes.length === 0) return;
    this.publicMap[moduleName] = routes;
    console.log(`✓ Rutas públicas registradas para: ${moduleName}`);
  }

  unregisterModule(moduleName: string): void {
    delete this.privateMap[moduleName];
    delete this.publicMap[moduleName];
  }

  getPrivateRoutes(): RouteObject[] {
    return Object.values(this.privateMap).flat();
  }

  getPublicRoutes(): RouteObject[] {
    return Object.values(this.publicMap).flat();
  }

  clearRoutes(): void {
    this.privateMap = {};
    this.publicMap = {};
  }
}

export default RouteRegistry.getInstance();