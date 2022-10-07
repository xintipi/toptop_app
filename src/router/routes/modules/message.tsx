import { RouteObject } from 'react-router-dom';

import { Message } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import AuthGuard from '@/router/guard/AuthGuard';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const message: RouteObject = {
  path: '/message',
  element: (
    <WrapperRouteComponent
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
