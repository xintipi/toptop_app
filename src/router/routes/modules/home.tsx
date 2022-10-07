import { RouteObject } from 'react-router-dom';

import { Home } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const home: RouteObject = {
  path: '/home',
  element: (
    <WrapperRouteAuth
      element={
        <DefaulLayoutHasSidebar>
          <Home />
        </DefaulLayoutHasSidebar>
      }
      title="title:home"
    />
  ),
};

export default home;
