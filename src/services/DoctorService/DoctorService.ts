import { AxiosResponse } from 'axios';
import api from '../../http/http';
import { IUser } from '../../utils/types/IUser';

export default class DoctorService {
  static getDoctors(page: number, query: string): Promise<AxiosResponse<{doctors: IUser[], total: number}>> {
    return api.get<{doctors: IUser[], total: number}>('/users/doctors', { params: {page, query} });
  }

  static addDoctor(doctorId: string): Promise<AxiosResponse<any>> {
    return api.post<any>('/users-doctor', { doctorId });
  }

}
