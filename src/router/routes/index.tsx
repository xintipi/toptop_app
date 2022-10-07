import { forEach, keys } from 'lodash-es';
import { Navigate, RouteObject } from 'react-router-dom';

const modules = import.meta.globEager('./modules/**/*.tsx') as any;
const routeModuleList: RouteObject[] = [];

forEach(keys(modules), (key) => {
  const mod = modules[key]?.default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

console.log(routeModuleList);

export const rootRoute: RouteObject = {
  path: '/',
  element: <Navigate to="/home" replace />,
};

export const exceptionRoute: RouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

// Basic routing without permission
export const basicRoutes = [rootRoute, exceptionRoute, ...routeModuleList];
