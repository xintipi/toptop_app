import { RouteObject } from 'react-router-dom';

import { PageNotFound } from '@/pages';
import { DefaultLayoutNoSidebar } from '@/router/constant';
import WrapperRouteComponent from '@/router/guard/WrapperRouteComponent';

const pageNotFound: RouteObject = {
  path: '/404',
  element: (
    <WrapperRouteComponent
      title="title:404"
      element={
        <DefaultLayoutNoSidebar>
          <PageNotFound />
        </DefaultLayoutNoSidebar>
      }
    ></WrapperRouteComponent>
  ),
};

export default pageNotFound;
