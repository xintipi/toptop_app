import { RouteObject } from 'react-router-dom';

import { Upload } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const upload: RouteObject = {
  path: '/upload',
  element: (
    <WrapperRouteComponent
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
