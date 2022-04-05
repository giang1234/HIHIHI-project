import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from './auth';
import { reducer as appReducer } from './app';
import { reducer as paymentReducer } from './payment';

const reducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    payment: paymentReducer,
});

// const middleware = process.env.NODE_ENV !== 'production' ? [thunk] : [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;