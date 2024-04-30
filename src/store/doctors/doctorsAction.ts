import {ADD_DOCTOR_AC, GET_DOCTORS_AC,} from '../../utils/constants';

export const getDoctorsAction = (page: number, query: string) => ({
    type: GET_DOCTORS_AC,
    payload: { page, query },
});

export const addDoctorsAction = (id: string) => ({
    type: ADD_DOCTOR_AC,
    payload: { id },
});