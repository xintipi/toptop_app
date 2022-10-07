import { RouteObject } from 'react-router-dom';

import { Following } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const following: RouteObject = {
  path: '/following',
  element: (
    <WrapperRouteAuth
      title="title:following"
      auth
      element={
        <DefaulLayoutHasSidebar>
          <Following />
        </DefaulLayoutHasSidebar>
      }
    />
  ),
};

export default following;
