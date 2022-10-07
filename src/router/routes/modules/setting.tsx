import { RouteObject } from 'react-router-dom';

import { Setting } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const setting: RouteObject = {
  path: '/setting',
  element: (
    <WrapperRouteComponent
      title="title:setting"
      auth
      guard="auth"
      element={
        <DefaultLayoutNoSidebar>
          <Setting />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default setting;
