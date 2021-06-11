import { BaseEditor, BaseElement, BaseText } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

type MyElement = BaseElement
type MyText = BaseText
type MyEditor = BaseEditor & ReactEditor & HistoryEditor

declare module 'slate' {
  interface CustomTypes {
    Editor: MyEditor
    Element: MyElement
    Text: MyText
  }
}