/// <reference types="react" />
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';
declare const rootReducer: import("react").Reducer<import("redux").CombinedState<{
    user: import("./userSlice").UserSlice;
    texts: import("../texts/textsSlice").TextsSlice;
}>, import("redux").AnyAction>;
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<any, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<any, import("redux").AnyAction, undefined>]>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export declare const userAppSelector: TypedUseSelectorHook<RootState>;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<any, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export {};
