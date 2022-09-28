import './App.scss';

import React, { Fragment } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { publicRoutes, Record } from '@/routes';

function App() {
  const { pathname } = useLocation();
  return (
    <Routes>
      {publicRoutes.map((route: Record, index: number) => {
        const Layout = route.layout as React.ElementType;
        const Page = route.component as React.ElementType;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.path === '*' ? (
                <Navigate to={`/404?fromUrl=${pathname}`} replace />
              ) : route.layout ? (
                <Layout>
                  <Page />
                </Layout>
              ) : (
                <Fragment>
                  <Page />
                </Fragment>
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
