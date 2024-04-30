import { put, takeLatest } from 'redux-saga/effects';
import UserService from '../../services/UserService/UserService';
import { AxiosResponse } from 'axios';
import {
  authFailure,
  authSuccess,
  logout,
  setAvatarSuccess,
} from './userSlice';

import {
  REFRESH_AC,
  LOGIN_AC,
  REGISTRATION_AC,
  SET_AVATAR,
  DELETE_ACCOUNT,
} from '../../utils/constants';
import { ILoginAction } from '../../utils/types/actions/ILoginAction';
import { IRegistrationAction } from '../../utils/types/actions/IRegistrationAction';
import { addError } from './userSlice';

export function* workLoginUser(action: ILoginAction) {
  try {
    const res: AxiosResponse = yield UserService.login(
      action.payload.email,
      action.payload.password,
    );
    yield put(authSuccess(res.data));
  } catch (e: any) {
    yield put(authFailure(`Error ${e.response.data.message}`));
  }
}

export function* workRegistrationUser(action: IRegistrationAction) {
  try {
    const res: AxiosResponse = yield UserService.registration(
      action.payload.email,
      action.payload.password,
      action.payload.fullname,
        action.payload.role,
    );
    yield put(authSuccess(res.data));
  } catch (e: any) {
    yield put(authFailure(`Error ${e.response.data.message}`));
    yield put(addError(e.response.data.message));
  }
}

export function* workRefresh() {
  try {
    const authRes: AxiosResponse = yield UserService.refresh();
    yield put(authSuccess(authRes.data));
  } catch (e: any) {
    yield put(authFailure(`Error ${e.response.data.message}`));
    yield put(addError(e.response.data.message));
  }
}

export function* workSetAvatar(action: { type: string; payload: FormData }) {
  try {
    const res: AxiosResponse = yield UserService.setAvatar(action.payload);
    yield put(setAvatarSuccess(res.data));
  } catch (e: any) {
    yield put(addError(e.response.data.message));
  }
}

export function* workDeleteAccount() {
  try {
    const res: AxiosResponse = yield UserService.deleteAccount();
    yield put(logout());
  } catch (e: any) {
    yield put(addError(e.response.data.message));
  }
}
export default [
  takeLatest(LOGIN_AC, workLoginUser),
  takeLatest(REGISTRATION_AC, workRegistrationUser),
  takeLatest(REFRESH_AC, workRefresh),
  takeLatest(SET_AVATAR, workSetAvatar),
  takeLatest(DELETE_ACCOUNT, workDeleteAccount),
];
