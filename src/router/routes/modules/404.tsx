import { RouteObject } from 'react-router-dom';

import { PageNotFound } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrappeRouteComponent from '@/router/guard/WrappeRouteComponent';

const pageNotFound: RouteObject = {
  path: '/404',
  element: (
    <WrappeRouteComponent
      title="title:404"
      element={
        <DefaultLayoutNoSidebar>
          <PageNotFound />
        </DefaultLayoutNoSidebar>
      }
    ></WrappeRouteComponent>
  ),
};

export default pageNotFound;
