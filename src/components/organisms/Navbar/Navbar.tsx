import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import routes from '../../../utils/config';
import { MyLink } from '../../atoms/MyLink/MyLink';
import { Logo } from '../../molecules/Logo/Logo';
import { Profile } from '../../molecules/Profile/Profile';
import { AuthButtons } from '../../molecules/AuthButtons/AuthButtons';
import i18next from 'i18next';
import { FC } from 'react';
import {DOCTOR_ROLE} from '../../../utils/constants';

export const MyNavbar: FC = () => {
  const { isAuth, user } = useTypedSelector(
    (state) => state.userReducer
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Logo />
        <Nav className="d-flex justify-content-center align-items-center gap-1">
          {user && <Profile user={user} />}
          <NavDropdown
            data-testid="dropdown"
            title="Меню"
            menuVariant="dark"
          >
            <NavDropdown.ItemText>
              {user?.fullname}
            </NavDropdown.ItemText>
            <NavDropdown.Divider />
            <NavDropdown.ItemText>
              <MyLink to={routes.doctors} text='Лікарі' />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <MyLink to={routes.metrics} text='Метрики' />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <MyLink
                to={routes.settings}
                text="Налаштування"
              />
            </NavDropdown.ItemText>
            {user?.role === DOCTOR_ROLE && <NavDropdown.ItemText>
              <MyLink to={routes.patients} text='Пацієнти' />
            </NavDropdown.ItemText>}
          </NavDropdown>
          <AuthButtons isAuth={isAuth} />
        </Nav>
      </Container>
    </Navbar>
  );
};
