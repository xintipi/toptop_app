// @ts-ignore
import loadable from '@loadable/component';

/**
 * @description: default layout with sidebar
 */
export const DefaulLayoutHasSidebar = loadable(
  () => import('../layouts/Default/Default'),
);

/**
 * @description: default layout not have sidebar
 */
export const DefaultLayoutNoSidebar = loadable(
  () => import('../layouts/HeaderOnly/HeaderOnly'),
);
