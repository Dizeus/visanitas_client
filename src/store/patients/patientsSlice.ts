import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../utils/types/IUser';
import {IPatientsState} from "../../utils/types/states/IPatientsState";

const initialState: IPatientsState = {
    patients: [],
    totalPage: 0,
};

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        getPatientsSuccess(state, action: PayloadAction<{ patients: IUser[], totalPage: number }>) {
            state.patients = action.payload.patients;
            state.totalPage = action.payload.totalPage;
        }
    },
});
export const {
    getPatientsSuccess,
} = patientsSlice.actions;
export default patientsSlice.reducer;