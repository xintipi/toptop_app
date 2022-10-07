import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { basicRoutes } from './routes/index';

const routeList: RouteObject[] = [...basicRoutes];

const RenderRouter: FC = () => {
  return useRoutes(routeList);
};

export default RenderRouter;
