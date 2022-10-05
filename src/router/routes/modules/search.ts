import { Search } from '@/pages';
import { DEFAULT_HAS_SIDEBAR } from '@/router/constant';
import { AuthGuard } from '@/router/guard';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/search',
  name: 'search',
  element: Search,
  layout: DEFAULT_HAS_SIDEBAR,
  guards: [AuthGuard],
  meta: {
    title: 'Search',
    auth: true,
  },
};

export default home;
