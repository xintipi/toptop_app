import { RouteObject } from 'react-router-dom';

import { Upload } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const upload: RouteObject = {
  path: '/upload',
  element: (
    <WrapperRouteAuth
      title="title:upload"
      auth
      element={
        <DefaultLayoutNoSidebar>
          <Upload />
        </DefaultLayoutNoSidebar>
      }
    />
  ),
};

export default upload;
