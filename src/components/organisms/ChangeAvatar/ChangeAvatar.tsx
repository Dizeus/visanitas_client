import { FC, useRef } from 'react';
import { Button } from 'react-bootstrap';
import style from './ChangeAvatar.module.scss';
import defaultAvatar from '../../../assets/defaultAvatar.png';
import { useTypedDispatch } from '../../../utils/hooks/useTypedDispatch';
import { setAvatarAction } from '../../../store/user/userActions';
import {IUser} from "../../../utils/types/IUser";

interface ChangeAvatarProps {
    user: IUser | null
}

export const ChangeAvatar: FC<ChangeAvatarProps> = ({user}) => {
  const dispatch = useTypedDispatch();

  const filePicker = useRef<any>(null);

  function setAvatar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files || event.target.files;
    let formData = new FormData();
    formData.append('image', files[0]);
    dispatch(setAvatarAction(formData));
  }

  return (
    <div className={style.setting}>
      <input
        type="file"
        className={style.hidden}
        ref={filePicker}
        multiple
        onChange={setAvatar}
        accept="image/*, .jpg"
        data-testid="input"
      />
      <div className={style.imgContainer}>
        <img
          className={style.image}
          src={
            user?.avatar
              ? process.env.REACT_APP_API_URL + user.avatar
              : defaultAvatar
          }
          alt="avatar"
          data-testid="image"
        />
      </div>
        <div>
            <p className={style.fullname}>{user?.fullname}</p>
            <Button
                onClick={() => filePicker?.current && filePicker.current.click()}
                variant="dark"
                data-testid="button"
            >
                Змінити аватар
            </Button>
        </div>

    </div>
  );
};
