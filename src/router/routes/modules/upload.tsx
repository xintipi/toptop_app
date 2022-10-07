import { RouteObject } from 'react-router-dom';

import { Upload } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const upload: RouteObject = {
  path: '/upload',
  element: (
    <WrappeRouteComponent
      title="title:upload"
      auth
      guard="auth"
      element={
        <DefaultLayoutNoSidebar>
          <Upload />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default upload;
