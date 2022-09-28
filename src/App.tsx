import './App.scss';

import React, { Fragment, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';

import { i18n } from '@/locales';
import { publicRoutes, Record } from '@/routes';

function App() {
  const { pathname } = useLocation();
  const [_searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // set params lang on url
    setSearchParams({ lang: i18n.language });
  }, [pathname]);

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
