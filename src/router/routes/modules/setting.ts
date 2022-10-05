import { Setting } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/setting',
  name: 'setting',
  element: Setting,
  layout: DEFAULT_NOT_SIDEBAR,
  meta: {
    title: 'Setting',
    auth: true,
  },
};

export default home;
