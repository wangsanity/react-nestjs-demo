import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { textsReducer } from '../texts/textsSlice';
import { noteReducer } from '../api/NoteApi';

export const createRootReducers = () =>
  combineReducers({
    user: userReducer,
    texts: textsReducer,
    note: noteReducer
  });

export default createRootReducers;
