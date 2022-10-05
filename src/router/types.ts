import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { GuardMiddleware } from 'react-router-guarded-routes';

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteProps, 'index'> {
  children?: AppRouteRecordRaw[];
  element?: () => React.ReactElement;
  layout?: () => React.ReactElement;
  path: string;
  name?: string;
  redirect?: string;
  guards?: GuardMiddleware[];
  meta?: Record<string | number | symbol, unknown>;
}

export type AppRouteModule = AppRouteRecordRaw;
