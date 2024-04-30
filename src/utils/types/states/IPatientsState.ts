import { IUser } from '../IUser';

export interface IPatientsState {
    patients: IUser[];
    totalPage: number;
}
