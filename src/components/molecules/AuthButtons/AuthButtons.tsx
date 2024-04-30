import { FC } from 'react';
import { Button } from 'react-bootstrap';
import routes from '../../../utils/config';
import { NavLink } from 'react-router-dom';
import { useTypedDispatch } from '../../../utils/hooks/useTypedDispatch';
import { logout } from '../../../store/user/userSlice';

interface AuthButtonsProps {
  isAuth: boolean;
}
export const AuthButtons: FC<AuthButtonsProps> = ({ isAuth }) => {
  const dispatch = useTypedDispatch();

  return isAuth ? (
    <Button
      variant={"outline-light"}
      onClick={() => dispatch(logout())}
    >
      Вийти
    </Button>
  ) : (
    <NavLink to={routes.auth.login}>
      <Button variant={"outline-light"}>
        Ввійти
      </Button>
    </NavLink>
  );
};
