import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './slice';
import { watchSearchContacts } from '../saga/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchSearchContacts);

