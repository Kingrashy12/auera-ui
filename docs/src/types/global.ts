import { ElementType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type BaseLangStruct = {
  name: string;
  icon: ElementType;
  color: string;
  ext: "tsx" | "jsx";
  baseExt: "ts" | "js";
};

export type BaseStructData = {
  name: string;
  icon: ElementType;
  color: string;
};

export interface DocsContextProps {
  lang: BaseLangStruct;
  framework: BaseStructData;
  updateLang: (lang: BaseLangStruct) => void;
  updateFramework: (type: BaseStructData) => void;
}
