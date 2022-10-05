import { GuardMiddleware } from 'react-router-guarded-routes';

const authGuard: GuardMiddleware = (to, from, next) => {
  console.log(to, from, 'auth');
  next();
};

export default authGuard;
