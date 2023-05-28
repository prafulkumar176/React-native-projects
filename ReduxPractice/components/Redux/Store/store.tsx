import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../Reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import Apisaga from '../../../ReduxSagaApi/ReduxSaga';

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [SagaMiddleware],
});

SagaMiddleware.run(Apisaga);

export default store;
