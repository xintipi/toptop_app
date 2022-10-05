import { Message } from '@/pages';
import { DEFAULT_NOT_SIDEBAR } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const home: AppRouteModule = {
  path: '/message',
  name: 'message',
  element: Message,
  layout: DEFAULT_NOT_SIDEBAR,
  meta: {
    title: 'Message',
    auth: true,
  },
};

export default home;
