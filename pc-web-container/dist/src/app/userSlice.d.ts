import { User } from '../utils';
import { RootState } from './store';
export interface UserSlice {
    userInfo?: User | null;
}
export declare const setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<User | null, "user/setUser">;
export declare const selectUser: (state: RootState) => User | null;
export declare const userReducer: import("redux").Reducer<UserSlice, import("redux").AnyAction>;
