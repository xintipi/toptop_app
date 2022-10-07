import { RouteObject } from 'react-router-dom';

import { Profile } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const profile: RouteObject = {
  path: '/:profileId',
  element: (
    <WrapperRouteAuth
      title="title:profile"
      auth
      element={
        <DefaultLayoutNoSidebar>
          <Profile />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default profile;
