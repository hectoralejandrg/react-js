import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './store';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  baseQuery: fetchBaseQuery({
  baseUrl: 'https://localhost:7290',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth?.token;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  tagTypes: ['User', 'Auth'],
  endpoints: () => ({})
});
