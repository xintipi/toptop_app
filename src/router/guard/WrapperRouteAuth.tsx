import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProps } from 'react-router';

import AuthGuard from '@/router/guard/AuthGuard';

export interface WrapperRouteProps extends RouteProps {
  /** document title locale */
  title: string;
  /** authorization？ */
  auth?: boolean;
}

const WrapperRouteAuth: FC<WrapperRouteProps> = ({ title, auth, ...props }) => {
  const { t } = useTranslation();

  if (title) {
    document.title = t(title);
  }

  return auth ? <AuthGuard {...props} /> : (props.element as ReactElement);
};

export default WrapperRouteAuth;
