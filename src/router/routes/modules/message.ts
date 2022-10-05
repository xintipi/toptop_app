import { Message } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import { AuthGuard } from '@/router/guard';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/message',
  name: 'message',
  element: Message,
  layout: DEFAULT_NOT_SIDEBAR,
  guards: [AuthGuard],
  meta: {
    title: 'Message',
    auth: true,
  },
};

export default home;
