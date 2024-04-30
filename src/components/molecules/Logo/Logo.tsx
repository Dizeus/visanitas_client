import { NavLink } from 'react-router-dom';
import style from './Logo.module.scss';
import routes from '../../../utils/config';
import { FC } from 'react';
import logo from '../../../assets/logo.png';

export const Logo: FC = () => {
  return (
    <NavLink className={style.container} to={routes.home}>
      <img data-testid='image' src={logo} alt='logo' />
      <h2 className={style.text}>Visanitas</h2>
    </NavLink>
  );
};
