import { Profile } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/:profileId',
  name: 'profile',
  element: Profile,
  layout: DEFAULT_NOT_SIDEBAR,
  meta: {
    title: 'Profile',
    auth: true,
  },
};

export default home;
