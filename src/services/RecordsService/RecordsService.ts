import { AxiosResponse } from 'axios';
import api from '../../http/http';
import {IRecord} from "../../utils/types/IRecord";

export default class RecordsService {

  static getRecords(page: number): Promise<AxiosResponse<{records: IRecord[], total: number}>> {
    return api.get<{records: IRecord[], total: number}>('/records', {params: {page}});
  }
  static getPatientRecords(page: number, patientId: string): Promise<AxiosResponse<{records: IRecord[], total: number}>> {
    return api.get<{records: IRecord[], total: number}>('/records/patient', {params: {page, patientId}});
  }
  static createRecord(time: Date, blPressureTop: number, blPressureBottom: number, wellBeing: number, activity: number, meal: string, note: string): Promise<AxiosResponse<{message: string}>> {
    console.log(time)
    return api.post<{message: string}>('/records', { time, blPressureTop,  blPressureBottom, wellBeing, activity, meal, note });
  }

}
