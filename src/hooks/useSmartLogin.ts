import { useLoginMutation } from '../modules/slice/authApiSlice';
import { LoginRequest, LoginResponse } from '../modules/types/types';

export const useSmartLogin = () => {
    const [login] = useLoginMutation();

    const smartLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
        try {
            const result = await login(credentials).unwrap();
            return result;
        } catch (realApiError) {
            return Promise.reject(realApiError);
        }
    };

    return { smartLogin };
};