export interface RegisterRequest {
    username: string;
    password: string;
    transportMode: 'Car' | 'Bus' | 'Walk'; 
}

export interface AuthResponse {
    token: string;
}