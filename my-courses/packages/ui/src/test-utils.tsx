import React, { ReactNode } from 'react';
import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createRootReducer from './app/reducers';
import { noteApiMiddleware } from './api/NoteApi';

export type TestStore = Store<unknown, AnyAction>;

const rootReducer = createRootReducer();

export const createTestStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(noteApiMiddleware)
  });
  return store;
};

export const RootWithStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={createTestStore()}>{children}</Provider>;
};
