import { RouteObject } from 'react-router-dom';

import { Following } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const following: RouteObject = {
  path: '/following',
  element: (
    <WrappeRouteComponent
      title="title:following"
      auth
      guard="auth"
      element={
        <DefaulLayoutHasSidebar>
          <Following />
        </DefaulLayoutHasSidebar>
      }
    />
  ),
};

export default following;
