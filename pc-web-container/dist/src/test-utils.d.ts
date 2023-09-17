import { ReactNode } from 'react';
import { AnyAction, Store } from '@reduxjs/toolkit';
export type TestStore = Store<unknown, AnyAction>;
export declare const createTestStore: () => import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<any, AnyAction, undefined>]>;
export declare const RootWithStore: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
