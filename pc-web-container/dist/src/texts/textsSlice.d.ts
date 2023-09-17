import { IMessages } from './messages.i';
import { ITextsShort } from './short.i';
import { RootState } from '../app/store';
export interface TextsSlice {
    textsShort?: ITextsShort;
    messages?: IMessages;
}
export declare const setTexts: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "texts/setTexts">;
export declare const selectTexts: (state: RootState) => TextsSlice;
export declare const textsReducer: import("redux").Reducer<TextsSlice, import("redux").AnyAction>;
