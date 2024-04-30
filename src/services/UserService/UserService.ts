import { AxiosResponse } from 'axios';
import api from '../../http/http';
import { AuthResponse } from '../../utils/types/response/AuthResponse';
import routes from '../../utils/config';
import { IUser } from '../../utils/types/IUser';

export default class UserService {
  static login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(routes.auth.login, { email, password });
  }
  static registration(
    email: string,
    password: string,
    fullname: string,
    role: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(routes.auth.registration, {
      email,
      password,
      fullname,
      role
    });
  }
  static refresh(): Promise<AxiosResponse<AuthResponse>> {
    return api.get<AuthResponse>(routes.auth.refresh);
  }

  static setAvatar(image: FormData): Promise<AxiosResponse<IUser>> {
    return api.put<IUser>(routes.user.avatar, image);
  }

  static deleteAccount(): Promise<AxiosResponse> {
    return api.delete(routes.user.delete);
  }
}
