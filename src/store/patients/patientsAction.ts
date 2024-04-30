import { GET_PATIENTS_AC } from '../../utils/constants';

export const getPatientsAction = (page: number, query: string) => ({
    type: GET_PATIENTS_AC,
    payload: { page, query },
});
