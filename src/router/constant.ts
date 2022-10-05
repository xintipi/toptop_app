// @ts-ignore
import loadable from '@loadable/component';
import React from 'react';

/**
 * @description: default layout with sidebar
 */
export const DEFAULT_HAS_SIDEBAR = loadable(() => import('../layouts/Default/Default'));

/**
 * @description: default layout not have sidebar
 */
export const DEFAULT_NOT_SIDEBAR = loadable(
  () => import('../layouts/HeaderOnly/HeaderOnly'),
);
