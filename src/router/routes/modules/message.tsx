import { RouteObject } from 'react-router-dom';

import { Message } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import AuthGuard from '@/router/guard/AuthGuard';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const message: RouteObject = {
  path: '/message',
  element: (
    <WrappeRouteComponent
      title="title:message"
      auth
      guard="auth"
      element={
        <DefaultLayoutNoSidebar>
          <Message />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default message;
