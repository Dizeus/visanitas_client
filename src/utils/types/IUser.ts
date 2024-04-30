
export interface IUser {
  id: string;
  email: string;
  username: string;
  password: string;
  rate?: number;
  fullname?: string;
  role: string;
  avatar: string | null;
}
