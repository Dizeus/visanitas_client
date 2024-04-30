import { put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { addError } from '../user/userSlice';
import RecordsService from "../../services/RecordsService/RecordsService";
import {getRecordsSuccess} from "./recordsSlice";
import {GET_PATIENT_RECORDS_AC, GET_RECORDS_AC} from "../../utils/constants";
import {CREATE_RECORD_AC} from "../../utils/constants";

export function* workGetRecords(action: {
    type: string;
    payload: { page: number };
}) {
    try {
        const res: AxiosResponse = yield RecordsService.getRecords(action.payload.page);
        yield put(getRecordsSuccess({records: res.data.records, totalPage: res.data.total / 30}));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}

export function* workGetPatientRecords(action: {
    type: string;
    payload: { page: number, patientId: string };
}) {
    try {
        const res: AxiosResponse = yield RecordsService.getPatientRecords(action.payload.page, action.payload.patientId);
        yield put(getRecordsSuccess({records: res.data.records, totalPage: res.data.total / 30}));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}



export function* workCreateRecord(action: {
    type: string;
    payload: {time: Date, blPressureTop: number, blPressureBottom: number, wellBeing: number, activity: number, meal: string, note: string };
}) {
    try {
        console.log(action.payload.time)
        const res: AxiosResponse = yield RecordsService.createRecord(
            action.payload.time,
            action.payload.blPressureTop,
            action.payload.blPressureBottom,
            action.payload.wellBeing,
            action.payload.activity,
            action.payload.meal,
            action.payload.note,
        );
        yield put(addError("Record added successfully"));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}

export default [
    takeLatest(GET_RECORDS_AC, workGetRecords),
    takeLatest(CREATE_RECORD_AC, workCreateRecord),
    takeLatest(GET_PATIENT_RECORDS_AC, workGetPatientRecords),
];