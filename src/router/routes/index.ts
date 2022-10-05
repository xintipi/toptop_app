import { forEach, keys } from 'lodash-es';

import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types';

const modules = import.meta.globEager('./modules/**/*.ts') as any;
const routeModuleList: AppRouteModule[] = [];

forEach(keys(modules), (key) => {
  const mod = modules[key]?.default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: '/home',
};

export const exceptionRoute: AppRouteRecordRaw = {
  path: '*',
  name: '*',
  redirect: '/404',
};

// Basic routing without permission
export const basicRoutes = [RootRoute, exceptionRoute, ...routeModuleList];
