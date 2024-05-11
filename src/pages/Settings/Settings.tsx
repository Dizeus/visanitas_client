import { FC } from 'react';
import { Container } from 'react-bootstrap';
import style from './Settings.module.scss';
import { ChangeAvatar } from '../../components/organisms/ChangeAvatar/ChangeAvatar';
import { DeleteConfirmation } from '../../components/molecules/DeleteConfirmation/DeleteConfirmation';
import { useTypedDispatch } from '../../utils/hooks/useTypedDispatch';
import { deleteAccountAction } from '../../store/user/userActions';
import i18next from 'i18next';
import {useTypedSelector} from "../../utils/hooks/useTypedSelector";

const Settings: FC = () => {
  const dispatch = useTypedDispatch();
  const user = useTypedSelector((state) => state.userReducer.user);
  return (
    <Container className="pt-4 pb-4">
      <div className={style.settings}>
        <ChangeAvatar user={user}/>
        <DeleteConfirmation
          onDelete={() => dispatch(deleteAccountAction())}
          name="Аккаунт"
        />
      </div>
    </Container>
  );
};

export default Settings;
