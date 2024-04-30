import { IUser } from '../IUser';

export interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  isAuth: boolean;
  error: string,
  errorKey: number,
  alert: string,
  alertKey: number,
}
