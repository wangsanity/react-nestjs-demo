import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserInfo, setUserInfo, User } from '../utils';
import { RootState } from './store';

export interface UserSlice {
  userInfo?: User | null;
}

const initialState: UserSlice = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      setUserInfo(action.payload);
      state.userInfo = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState): User | null => state.user.userInfo || getUserInfo();
export const userReducer = userSlice.reducer;
