import {
    useGetUsersQuery,
    useGetUserByIdQuery, 
    useCreateUserMutation,
    useGetMockUsersQuery,
    useGetMockUserByIdQuery,
    useCreateMockUserMutation
} from '../modules/slice/usersApiSlice';
import { CreateUserRequest, User } from '../modules/types/types';

export const useSmartUsers = () => {
    // Real API hooks
    const realUsersQuery = useGetUsersQuery();
    const mockUsersQuery = useGetMockUsersQuery(undefined, { skip: !realUsersQuery.isError });
    
    const [createUser] = useCreateUserMutation();
    const [createMockUser] = useCreateMockUserMutation();

    // Smart getUsers function
    const getUsersData = () => {
        if (realUsersQuery.isSuccess) {
            return {
                data: realUsersQuery.data,
                error: null,
                isLoading: realUsersQuery.isLoading,
                isSuccess: true,
                isError: false
            };
        } else if (realUsersQuery.isError && mockUsersQuery.isSuccess) {
            return {
                data: mockUsersQuery.data,
                error: null,
                isLoading: mockUsersQuery.isLoading,
                isSuccess: true,
                isError: false
            };
        } else {
            return {
                data: undefined,
                error: realUsersQuery.error || mockUsersQuery.error,
                isLoading: realUsersQuery.isLoading || mockUsersQuery.isLoading,
                isSuccess: false,
                isError: true
            };
        }
    };

    // Smart createUser function
    const smartCreateUser = async (userData: CreateUserRequest): Promise<User> => {
        try {
            const result = await createUser(userData).unwrap();
            return result;
        } catch (realApiError) {
            try {
                const mockResult = await createMockUser(userData).unwrap();
                return mockResult;
            } catch (mockError) {
                throw mockError;
            }
        }
    };

    return {
        getUsersData,
        smartCreateUser,
        refetchUsers: () => {
            realUsersQuery.refetch();
            if (realUsersQuery.isError) {
                mockUsersQuery.refetch();
            }
        }
    };
};

export const useSmartUserById = (id: number) => {
    const realUserQuery = useGetUserByIdQuery(id);
    const mockUserQuery = useGetMockUserByIdQuery(id, { skip: !realUserQuery.isError });

    if (realUserQuery.isSuccess) {
        return {
            data: realUserQuery.data,
            error: null,
            isLoading: realUserQuery.isLoading,
            isSuccess: true,
            isError: false
        };
    } else if (realUserQuery.isError && mockUserQuery.isSuccess) {
        return {
            data: mockUserQuery.data,
            error: null,
            isLoading: mockUserQuery.isLoading,
            isSuccess: true,
            isError: false
        };
    } else {
        return {
            data: undefined,
            error: realUserQuery.error || mockUserQuery.error,
            isLoading: realUserQuery.isLoading || mockUserQuery.isLoading,
            isSuccess: false,
            isError: true
        };
    }
};