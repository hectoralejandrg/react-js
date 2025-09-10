import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: [],
  endpoints: () => ({})
});
