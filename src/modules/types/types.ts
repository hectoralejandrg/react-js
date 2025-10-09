export interface Pokemon {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

// Authentication Types
export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface User {
    id: number;
    username: string;
    role: string;
}

export interface CreateUserRequest {
    username: string;
    password: string;
    role: string;
}

// Auth State
export interface AuthState {
    token: string | null;
    user: User | null;
    isAuthenticated: boolean;
}
