import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import userReducer from './user/userSlice';
import doctorsReducer from './doctors/doctorsSlice';
import patientsReducer from './patients/patientsSlice';
import recordsReducer from './records/recordsSlice';
import {CREATE_RECORD_AC} from "../utils/constants";

export const rootReducer = combineReducers({
  userReducer,
  doctorsReducer,
  patientsReducer,
  recordsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const setupStore = (initialState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [CREATE_RECORD_AC],
        },
      }).concat(sagaMiddleware),
    preloadedState: initialState,
  });
  sagaMiddleware.run(sagas);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
