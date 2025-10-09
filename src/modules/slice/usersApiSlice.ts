import { globalApi } from '../../store/globalApi';
import { User, CreateUserRequest } from '../types/types';
import { mockUsers, mockDelay } from '../../utils/mockApi';

let mockUsersList = [...mockUsers];
let nextId = 4;

export const usersApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/api/Users',
            transformErrorResponse: (response: any) => {
                return response;
            },
            providesTags: ['User'],
        }),
        
        // Mock version for fallback
        getMockUsers: builder.query<User[], void>({
            queryFn: async () => {
                await mockDelay(300);
                return { data: mockUsersList };
            },
            providesTags: ['User'],
        }),
        getUserById: builder.query<User, number>({
            query: (id) => `/api/Users/${id}`,
            transformErrorResponse: (response: any) => {
                return response;
            },
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        
        // Mock version for fallback
        getMockUserById: builder.query<User, number>({
            queryFn: async (id) => {
                await mockDelay(200);
                const user = mockUsersList.find(u => u.id === id);
                if (user) {
                    return { data: user };
                } else {
                    return { error: { status: 404, data: { message: 'User not found' } } };
                }
            },
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        createUser: builder.mutation<User, CreateUserRequest>({
            query: (userData) => ({
                url: '/api/Users',
                method: 'POST',
                body: userData,
            }),
            transformErrorResponse: (response: any) => {
                return response;
            },
            invalidatesTags: ['User'],
        }),
        
        // Mock version for fallback
        createMockUser: builder.mutation<User, CreateUserRequest>({
            queryFn: async (userData) => {
                await mockDelay(400);
                const newUser: User = {
                    id: nextId++,
                    username: userData.username,
                    role: userData.role
                };
                mockUsersList.push(newUser);
                return { data: newUser };
            },
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useGetMockUsersQuery,
    useGetMockUserByIdQuery,
    useCreateMockUserMutation,
} = usersApi;