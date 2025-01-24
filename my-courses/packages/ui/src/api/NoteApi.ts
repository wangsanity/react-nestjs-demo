import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Middleware, Reducer } from 'redux';
import { env } from '../config/env';

const tags = ['note'];

const noteApiSlice = createApi({
  reducerPath: 'note',
  tagTypes: tags,
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
    prepareHeaders: (headers) => headers
  }),
  endpoints: () => ({})
});

export const noteApiPath = noteApiSlice.reducerPath;
export const noteApiMiddleware = noteApiSlice.middleware as Middleware;
export const noteReducer = noteApiSlice.reducer as Reducer;
