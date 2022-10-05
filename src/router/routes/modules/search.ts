import { Search } from '@/pages';
import { DEFAULT_HAS_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/search',
  name: 'search',
  element: Search,
  layout: DEFAULT_HAS_SIDEBAR,
  meta: {
    title: 'Search',
    auth: true,
  },
};

export default home;
