import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  GuardConfigProvider,
  GuardedRoute,
  GuardedRoutes,
  GuardProvider,
} from 'react-router-guarded-routes';

import routes from '@/router/routes';
import { AppRouteRecordRaw } from '@/router/types';

function App() {
  const location = useLocation();

  useEffect(() => {
    const curTitle = routes.find((item) => item.path === location.pathname);
    if (curTitle && curTitle?.meta?.title) {
      document.title = curTitle.meta.title as string;
    }
  }, [location]);

  return (
    <GuardConfigProvider>
      <GuardProvider>
        <GuardedRoutes>
          {routes.map((route: AppRouteRecordRaw, index: number) => {
            const Page = route.element as React.ElementType;
            const Layout = route.layout as React.ElementType;
            return (
              <GuardedRoute
                key={index}
                path={route.path}
                guards={route.guards}
                meta={route.meta}
                exact
                element={
                  route.redirect ? (
                    <Navigate to={route.redirect} replace />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
        </GuardedRoutes>
      </GuardProvider>
    </GuardConfigProvider>
  );
}

export default App;
