import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../utils/types/IUser';
import {IDoctorsState} from "../../utils/types/states/IDoctorsState";

const initialState: IDoctorsState = {
    doctors: [],
    totalPage: 0,
};

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        getDoctorsSuccess(state, action: PayloadAction<{ doctors: IUser[], totalPage: number }>) {
            state.doctors = action.payload.doctors;
            state.totalPage = action.payload.totalPage;
        },
    },
});
export const {
    getDoctorsSuccess,
} = doctorsSlice.actions;
export default doctorsSlice.reducer;