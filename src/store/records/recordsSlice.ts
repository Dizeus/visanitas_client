import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IRecordsState} from "../../utils/types/states/IRecordsState";
import {IRecord} from "../../utils/types/IRecord";

const initialState: IRecordsState = {
    records: [],
    totalPage: 0,
};

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        getRecordsSuccess(state, action: PayloadAction<{ records: IRecord[], totalPage: number }>) {
            state.records = action.payload.records;
            state.totalPage = action.payload.totalPage;
        },

    },
});
export const {
    getRecordsSuccess,
} = recordsSlice.actions;

export default recordsSlice.reducer;