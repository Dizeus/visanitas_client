import {
  REFRESH_AC,
  LOGIN_AC,
  GET_RIGHTS_AC,
  REGISTRATION_AC,
  SET_AVATAR,
  DELETE_ACCOUNT,
} from '../../utils/constants';
import { ILoginAction } from '../../utils/types/actions/ILoginAction';
import { IRegistrationAction } from '../../utils/types/actions/IRegistrationAction';

export const loginAction = (email: string, password: string): ILoginAction => ({
  type: LOGIN_AC,
  payload: { email, password },
});

export const registrationAction = (
  email: string,
  password: string,
  fullname: string,
  role: string
): IRegistrationAction => ({
  type: REGISTRATION_AC,
  payload: { email, password, fullname, role },
});

export const refreshAction = () => ({ type: REFRESH_AC });

export const getRightsAction = (page: number) => ({
  type: GET_RIGHTS_AC,
  payload: page,
});

export const setAvatarAction = (image: FormData) => ({
  type: SET_AVATAR,
  payload: image,
});

export const deleteAccountAction = () => ({
  type: DELETE_ACCOUNT,
});
