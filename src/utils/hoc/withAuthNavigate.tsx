import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import routes from '../config';

export const withAuthNavigate = (Component: FC): FC => {
  const RedirectComponent: FC = (props: any) => {
    const isAuth = useTypedSelector((state) => state.userReducer.isAuth);
    return isAuth ? (
      <Component {...props} />
    ) : (
      <Navigate to={routes.auth.login} replace={true} />
    );
  };
  return RedirectComponent;
};
