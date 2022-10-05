import { Home } from '@/pages';
import { DEFAULT_HAS_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/home',
  name: 'home',
  element: Home,
  layout: DEFAULT_HAS_SIDEBAR,
  meta: {
    title: 'Home',
    auth: false,
  },
};

export default home;
