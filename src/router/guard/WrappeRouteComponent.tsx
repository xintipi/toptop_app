import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProps } from 'react-router';
import { an } from 'vitest/dist/global-e98f203b';

import AuthGuard from '@/router/guard/AuthGuard';
import LoginGuard from '@/router/guard/LoginGuard';

export interface WrapperRouteProps extends RouteProps {
  /** document title locale */
  title: string;
  /** authorization？ */
  auth?: boolean;
  /** Component handle guard */
  guard?: string;
}

const WrapperRouteAuth: FC<WrapperRouteProps> = ({ title, auth, guard, ...props }) => {
  const { t } = useTranslation();
  const component = {
    login: <LoginGuard {...props} />,
    auth: <AuthGuard {...props} />,
  };

  if (title) {
    document.title = t(title);
  }

  return auth
    ? component[guard as keyof typeof component]
    : (props.element as ReactElement);
};

export default WrapperRouteAuth;
