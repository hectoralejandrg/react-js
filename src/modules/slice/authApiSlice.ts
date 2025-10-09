import { globalApi } from '../../store/globalApi';
import { LoginRequest, LoginResponse } from '../types/types';

export const authApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/api/Auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformErrorResponse: (response: any) => {
                return response;
            },
        })
    }),
});

export const { useLoginMutation } = authApi;