import style from './Profile.module.scss';
import { FC } from 'react';
import defaultAvatar from '../../../assets/defaultAvatar.png';
import { IUser } from '../../../utils/types/IUser';

interface ProfileProps {
  user?: IUser;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.imgContainer}>
        <img
          className={style.image}
          src={
            user?.avatar
              ? process.env.REACT_APP_API_URL + user.avatar
              : defaultAvatar
          }
          alt='avatar'
          data-testid='image'
        />
      </div>
      <h2 className={style.username}>{user?.username}</h2>
    </div>
  );
};
