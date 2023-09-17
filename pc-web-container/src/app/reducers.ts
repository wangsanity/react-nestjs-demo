import { combineReducers, CombinedState, AnyAction } from "@reduxjs/toolkit";
import { userReducer, UserSlice } from "./userSlice";
import { textsReducer, TextsSlice } from "../texts/textsSlice";
import { Reducer } from "react";

export const createRootReducers = (): Reducer<
  CombinedState<{
    user: UserSlice;
    texts: TextsSlice;
  }>,
  AnyAction
> =>
  combineReducers({
    user: userReducer,
    texts: textsReducer,
  });

export default createRootReducers;
