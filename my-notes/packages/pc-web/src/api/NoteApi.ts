import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Middleware, Reducer } from 'redux';
import { noteListResponseDTO } from '@my-notes/shared';
import { env } from '../config/env';

const tags = ['note'];

const noteApiSlice = createApi({
  reducerPath: 'note',
  tagTypes: tags,
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
    prepareHeaders: (headers) => headers
  }),
  endpoints: (builder) => ({
    getNotes: builder.query<noteListResponseDTO, void>({
      query: () => `note/list`,
      providesTags: tags
    })
  })
});

export const { useGetNotesQuery } = noteApiSlice;
export const noteApiPath = noteApiSlice.reducerPath;
export const noteApiMiddleware = noteApiSlice.middleware as Middleware;
export const noteReducer = noteApiSlice.reducer as Reducer;
