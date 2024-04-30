import { put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
    getDoctorsSuccess

} from './doctorsSlice';
import {
    ADD_DOCTOR_AC,
    FRIENDS_BY_PAGE, GET_DOCTORS_AC,
} from '../../utils/constants';
import DoctorService from "../../services/DoctorService/DoctorService";
import {addAlert, addError} from "../user/userSlice";

export function* workGetDoctors(action: {
    type: string;
    payload: { page: number; query: string };
}) {
    try {
        const res: AxiosResponse = yield DoctorService.getDoctors(
            action.payload.page,
            action.payload.query,
        );
        yield put(getDoctorsSuccess({doctors: res.data.doctors, totalPage: res.data.total / FRIENDS_BY_PAGE}));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}


export function* workAddDoctor(action: {
    type: string;
    payload: { id: string };
}) {
    try {
        const res: AxiosResponse = yield DoctorService.addDoctor(
            action.payload.id
        );
        yield put(addAlert("Доктор успішно доданий"));
    } catch (e: any) {
        yield put(addError(e.response.data.message));
    }
}

export default [
    takeLatest(GET_DOCTORS_AC, workGetDoctors),
    takeLatest(ADD_DOCTOR_AC, workAddDoctor),
];