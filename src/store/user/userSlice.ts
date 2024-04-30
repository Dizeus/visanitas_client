import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../utils/types/response/AuthResponse';
import { IUserState } from '../../utils/types/states/IUserState';
import { IUser } from '../../utils/types/IUser';

const initialState: IUserState = {
  user: null,
  isLoading: true,
  isAuth: false,
  error: '',
  errorKey: 1,
  alert: '',
  alertKey: 1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authSuccess(state, action: PayloadAction<AuthResponse>) {
      localStorage.setItem('token', action.payload.token);
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.isAuth = false;
      state.user = null;
    },
    setAvatarSuccess(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    addAlert(state, action: PayloadAction<string>) {
      state.alert = action.payload;
      state.alertKey++;
    },
    addError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.errorKey++;
    },  },
});

export const {
  authSuccess,
  setAvatarSuccess,
  authFailure,
  logout,
  addError,
  addAlert
} = userSlice.actions;
export default userSlice.reducer;
