import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProps } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthGuard from '@/router/guard/AuthGuard';
import LoginGuard from '@/router/guard/LoginGuard';

export type WrapperRouteProps = RouteProps & {
  /** document title locale */
  title?: string;
  /** authorization？ */
  auth?: boolean;
  /** Component handle guard */
  guard?: string;
  /** set query router */
  pageNotFound?: boolean;
};

const WrapperRouteComponent: (props: WrapperRouteProps) => void = (
  props: WrapperRouteProps,
) => {
  const { title, auth, guard, pageNotFound } = props;

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const component = {
    login: <LoginGuard {...props} />,
    auth: <AuthGuard {...props} />,
  };

  if (title) {
    document.title = t(title);
  }

  if (pageNotFound) {
    return navigate(`/404?fromUrl=${pathname}`);
  }

  return auth
    ? component[guard as keyof typeof component]
    : (props.element as ReactElement);
};

export default WrapperRouteComponent;
