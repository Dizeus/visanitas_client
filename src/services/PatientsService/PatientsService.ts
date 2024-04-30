import { AxiosResponse } from 'axios';
import api from '../../http/http';
import { IUser } from '../../utils/types/IUser';

export default class PatientsService {
  static getPatients(page: number, query: string): Promise<AxiosResponse<{patients: IUser[], total: number}>> {
    return api.get<{patients: IUser[], total: number}>('/users/patients', { params: {page, query} });
  }
}
