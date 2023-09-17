import { MessagesENUS } from './en-us/messages';
import { TextsShortENUS } from './en-us/short';
import { IMessages } from './messages.i';
import { ITextsShort } from './short.i';
import { MessagesZHCN } from './zh-cn/messages';
import { TextsShortZHCN } from './zh-cn/short';

interface Texts {
  short: ITextsShort;
  messages: IMessages;
}

export const langKey = 'lang';

export const texts = (): Texts => {
  const lang = window.localStorage.getItem(langKey) || 'en-us';
  if (lang === 'zh-cn') {
    return {
      short: TextsShortZHCN,
      messages: MessagesZHCN
    };
  } else {
    return {
      short: TextsShortENUS,
      messages: MessagesENUS
    };
  }
};
