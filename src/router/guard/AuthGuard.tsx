import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';
import { Navigate } from 'react-router-dom';

import { selectLogged } from '@/store/modules/auth/slice';

const AuthGuard: FC<RouteProps> = (props: RouteProps) => {
  const logged = useSelector(selectLogged);

  return logged ? (props.element as ReactElement) : <Navigate to="/home" />;
};

export default AuthGuard;
