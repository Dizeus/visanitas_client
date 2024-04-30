export interface ILoginAction {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}
