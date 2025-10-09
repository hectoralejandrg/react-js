import { globalApi } from './globalApi';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from '../modules/slice/counterSlice';
import authReducer from '../modules/slice/authSlice';

export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    counter: counterReducer,
    auth: authReducer
  },
    
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

setupListeners(store.dispatch);

 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
