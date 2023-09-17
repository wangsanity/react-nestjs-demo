import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessages } from './messages.i';
import { ITextsShort } from './short.i';
import { RootState } from '../app/store';
import { langKey, texts } from './texts';

const { short, messages } = texts();

export interface TextsSlice {
  textsShort?: ITextsShort;
  messages?: IMessages;
}

const initialState: TextsSlice = {
  textsShort: short,
  messages: messages
};

const textsSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    setTexts: (state, action: PayloadAction<string>) => {
      window.localStorage.setItem(langKey, action.payload);
      state.textsShort = texts().short;
      state.messages = texts().messages;
    }
  }
});

export const { setTexts } = textsSlice.actions;
export const selectTexts = (state: RootState): TextsSlice => state.texts;
export const textsReducer = textsSlice.reducer;
