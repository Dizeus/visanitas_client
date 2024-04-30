import { put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
    getPatientsSuccess

} from './patientsSlice';
import {
    FRIENDS_BY_PAGE, GET_PATIENTS_AC,
} from '../../utils/constants';
import { addError } from '../user/userSlice';
import PatientsService from "../../services/PatientsService/PatientsService";

export function* workGetPatients(action: {
    type: string;
    payload: { page: number; query: string };
}) {
    try {
        const res: AxiosResponse = yield PatientsService.getPatients(
            action.payload.page,
            action.payload.query,
        );
        yield put(getPatientsSuccess({patients: res.data.patients, totalPage: res.data.total / FRIENDS_BY_PAGE}));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}

export default [
    takeLatest(GET_PATIENTS_AC, workGetPatients),
];