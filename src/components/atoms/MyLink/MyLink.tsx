import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './MyLinks.module.scss';

interface NavLinkProps {
  to: string;
  text: string;
}

export const MyLink: FC<NavLinkProps> = ({ to, text }) => {
  return (
    <div className={style.link} data-testid='my-link'>
      <NavLink to={to}>{text}</NavLink>
    </div>
  );
};
