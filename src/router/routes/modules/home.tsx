import { RouteObject } from 'react-router-dom';

import { Home } from '@/pages';
import { DefaulLayoutHasSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const home: RouteObject = {
  path: '/home',
  element: (
    <WrapperRouteComponent
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
