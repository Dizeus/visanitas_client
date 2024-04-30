import { all } from 'redux-saga/effects';
import userWatchers from './user/userWatchers';
import doctorsWatchers from "./doctors/doctorsWatchers";
import patientsWatchers from "./patients/patientsWatchers";
import recordsWatchers from "./records/recordsWatchers";

export default function* rootSaga() {
  yield all([
    ...userWatchers,
    ...doctorsWatchers,
    ...patientsWatchers,
    ...recordsWatchers,
  ]);
}
