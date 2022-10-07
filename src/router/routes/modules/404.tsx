import { RouteObject } from 'react-router-dom';

import { PageNotFound } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteAuth from '@/router/guard/WrapperRouteAuth';

const pageNotFound: RouteObject = {
  path: '/404',
  element: (
    <WrapperRouteAuth
      title="title:404"
      element={
        <DefaultLayoutNoSidebar>
          <PageNotFound />
        </DefaultLayoutNoSidebar>
      }
    ></WrapperRouteAuth>
  ),
};

export default pageNotFound;
