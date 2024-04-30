import {CREATE_RECORD_AC, GET_PATIENT_RECORDS_AC, GET_RECORDS_AC} from '../../utils/constants';

export const getRecordsAction = (page: number,) => ({
    type: GET_RECORDS_AC,
    payload: {page},
});
export const getPatientRecordsAction = (patientId: string, page: number) => ({
    type: GET_PATIENT_RECORDS_AC,
    payload: {page, patientId},
});

export const createRecordAction = (time: Date, blPressureTop: number, blPressureBottom: number, wellBeing: number, activity: number, meal: string, note: string) => ({
    type: CREATE_RECORD_AC,
    payload: { time, blPressureTop, blPressureBottom, wellBeing, activity, meal, note },
});