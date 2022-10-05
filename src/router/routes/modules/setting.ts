import { Setting } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import { AuthGuard } from '@/router/guard';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/setting',
  name: 'setting',
  element: Setting,
  layout: DEFAULT_NOT_SIDEBAR,
  guards: [AuthGuard],
  meta: {
    title: 'Setting',
    auth: true,
  },
};

export default home;