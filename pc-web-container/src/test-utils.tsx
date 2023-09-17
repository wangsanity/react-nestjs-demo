import React, { ReactNode } from 'react';
import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createRootReducer from './app/reducers';

export type TestStore = Store<unknown, AnyAction>;

const rootReducer = createRootReducer();

export const createTestStore = () => {
  const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reducer: rootReducer as any
  });
  return store;
};

export const RootWithStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={createTestStore()}>{children}</Provider>;
};
