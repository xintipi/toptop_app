import { PageNotFound } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/404',
  name: '404',
  element: PageNotFound,
  layout: DEFAULT_NOT_SIDEBAR,
  meta: {
    title: '404',
    auth: false,
  },
};

export default home;
