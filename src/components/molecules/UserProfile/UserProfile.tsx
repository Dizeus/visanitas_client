import style from './UserProfile.module.scss';
import { FC } from 'react';
import defaultAvatar from '../../../assets/defaultAvatar.png';
import { IUser } from '../../../utils/types/IUser';

interface UserProfileProps {
    user: IUser;
}

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.imgContainer}>
        <img
          src={
              user.avatar
              ? process.env.REACT_APP_API_URL + user.avatar
              : defaultAvatar
          }
          className={style.img}
          alt='avatar image'
        />
      </div>
      <div>
        <div className={style.fullname}>{user.fullname}</div>
        <div className={style.email}>{user.email}</div>
      </div>
    </div>
  );
};
