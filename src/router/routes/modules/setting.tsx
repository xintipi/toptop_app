import { RouteObject } from 'react-router-dom';

import { Setting } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const setting: RouteObject = {
  path: '/setting',
  element: (
    <WrapperRouteAuth
      title="title:setting"
      auth
      element={
        <DefaultLayoutNoSidebar>
          <Setting />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default setting;
