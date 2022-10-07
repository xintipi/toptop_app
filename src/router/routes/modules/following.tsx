import { RouteObject } from 'react-router-dom';

import { Following } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const following: RouteObject = {
  path: '/following',
  element: (
    <WrapperRouteComponent
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
