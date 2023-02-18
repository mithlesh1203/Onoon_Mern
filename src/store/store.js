import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../_service/_Reducers/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});


export default store;