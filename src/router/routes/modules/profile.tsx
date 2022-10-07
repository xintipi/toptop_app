import { RouteObject } from 'react-router-dom';

import { Profile } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const profile: RouteObject = {
  path: '/:profileId',
  element: (
    <WrappeRouteComponent
      title="title:profile"
      auth
      guard="auth"
      element={
        <DefaultLayoutNoSidebar>
          <Profile />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default profile;
