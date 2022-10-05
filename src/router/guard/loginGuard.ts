import { GuardMiddleware } from 'react-router-guarded-routes';

const loginGuard: GuardMiddleware = (to, from, next) => {
  console.log(to, from, 'Login');
  next();
  // next({ pathname: '/setting' }); // redirect to setting page
};

export default loginGuard;
