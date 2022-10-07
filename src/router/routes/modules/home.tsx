import { RouteObject } from 'react-router-dom';

import { Home } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const home: RouteObject = {
  path: '/home',
  element: (
    <WrappeRouteComponent
      title="title:home"
      element={
        <DefaulLayoutHasSidebar>
          <Home />
        </DefaulLayoutHasSidebar>
      }
    />
  ),
};

export default home;
