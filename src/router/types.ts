import * as React from 'react';
import { LazyExoticComponent, ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteProps, 'index'> {
  children?: AppRouteRecordRaw[];
  element?: () => React.ReactElement;
  layout?: () => React.ReactElement;
  path: string;
  name?: string;
  redirect?: string;
  meta?: Record<string | number | symbol, unknown>;
}

export type AppRouteModule = AppRouteRecordRaw;
