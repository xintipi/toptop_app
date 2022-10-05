import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import routes from '@/router/routes';
import { AppRouteRecordRaw } from '@/router/types';

function App() {
  const { pathname } = useLocation();
  return (
    <Routes>
      {routes.map((route: AppRouteRecordRaw, index: number) => {
        const Page = route.element as React.ElementType;
        const Layout = route.layout as React.ElementType;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.redirect ? (
                <Navigate
                  to={`${route.redirect}${
                    route.name === '*' ? `?fromUrl=${pathname}` : ''
                  }`}
                  replace
                />
              ) : (
                <Layout>
                  <Page />
                </Layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
