import { Following } from '@/pages';
import { DEFAULT_HAS_SIDEBAR } from '@/router/constant';
import { AuthGuard } from '@/router/guard';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/following',
  name: 'following',
  element: Following,
  layout: DEFAULT_HAS_SIDEBAR,
  guards: [AuthGuard],
  meta: {
    title: 'Following',
    auth: true,
  },
};

export default home;
