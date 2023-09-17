import { CombinedState, AnyAction } from "@reduxjs/toolkit";
import { UserSlice } from "./userSlice";
import { TextsSlice } from "../texts/textsSlice";
import { Reducer } from "react";
export declare const createRootReducers: () => Reducer<CombinedState<{
    user: UserSlice;
    texts: TextsSlice;
}>, AnyAction>;
export default createRootReducers;
