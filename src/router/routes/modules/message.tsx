import { RouteObject } from 'react-router-dom';

import { Message } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const message: RouteObject = {
  path: '/message',
  element: (
    <WrapperRouteAuth
      title="title:message"
      auth
      element={
        <DefaultLayoutNoSidebar>
          <Message />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default message;
