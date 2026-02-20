import { globalApi } from "./globalApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "@/modules/home/slice/counterSlice";
import authReducer from "@/modules/home/slice/authSlice";

export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    counter: counterReducer,
    auth: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

setupListeners(store.dispatch);

// root redux types based on store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
