import { ColorPair } from "./auera-system";

export type LoadIndicatorProps = {
  className?: string;
  color?: ColorPair;
};
export type LazyImportProps<T> = {
  importFunc: () => Promise<{ default: React.ComponentType<T> }>;
  loaderOptions?: LoadIndicatorProps;
};

export type Currency =
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "CNY"
  | "SEK"
  | "NZD";

type ReplaceReg = "/" | "-" | " " | "," | ":" | "";

export type FormatDate = {
  date: Date;
  format?: "yyyy-mm-dd" | "mm-yyyy" | "dd-mmm";
  locale?: "en-US" | "en-UK";
  replaceFormat?: ReplaceReg;
};

export type DataGroup<T> = {
  data: T[];
  key: keyof T;
};
