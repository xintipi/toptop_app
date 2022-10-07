import { FC, ReactElement } from 'react';
import { RouteProps } from 'react-router';

import LoginGuard from '@/router/guard/LoginGuard';

export interface WrapperRouteProps extends RouteProps {
  /** document title locale */
  title: string;
  /** authorization？ */
  auth?: boolean;
}

const WrapperRouteLogin: FC<WrapperRouteProps> = ({ title, auth, ...props }) => {
  if (title) {
    document.title = title;
  }
  return auth ? <LoginGuard {...props} /> : (props.element as ReactElement);
};

export default WrapperRouteLogin;
