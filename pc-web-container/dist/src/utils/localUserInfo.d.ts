export interface User {
    name: string;
    token: string;
}
export declare const getUserInfo: () => User | null;
export declare const setUserInfo: (user: User | null) => void;
