export interface IRegistrationAction {
  type: string;
  payload: {
    email: string;
    password: string;
    fullname: string;
    role: string;
  };
}
