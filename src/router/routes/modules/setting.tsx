import { RouteObject } from 'react-router-dom';

import { Setting } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const setting: RouteObject = {
  path: '/setting',
  element: (
    <WrappeRouteComponent
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
