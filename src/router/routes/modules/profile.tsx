import { RouteObject } from 'react-router-dom';

import { Profile } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const profile: RouteObject = {
  path: '/:profileId',
  element: (
    <WrapperRouteComponent
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
