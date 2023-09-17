import { IMessages } from './messages.i';
import { ITextsShort } from './short.i';
interface Texts {
    short: ITextsShort;
    messages: IMessages;
}
export declare const langKey = "lang";
export declare const texts: () => Texts;
export {};
