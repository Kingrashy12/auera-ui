import { ColorPair } from "./auera-system";

export type LoadIndicatorProps = {
  className?: string;
  color?: ColorPair;
};
export type LazyImportProps<T = {}> = {
  importFunc: () => Promise<{ default: React.ComponentType<T> }>;
  loaderOptions?: LoadIndicatorProps;
};

export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CHF" | "CNY" | "NGN";

type ReplaceReg = "/" | "-" | " " | "," | ":" | "";

export type FormatPattern =
  | "yyyy-mm-dd"
  | "mm-yyyy"
  | "dd-mmm"
  | "ddd-mmm-dd"
  | "yyyy/mm/dd"
  | "dd-mm-yyyy"
  | "mmm-yyyy"
  | "full";

export type TimeFormatPattern =
  | "hh:mm"
  | "hh:mm:ss"
  | "hh:mm AM/PM"
  | "hh:mm:ss AM/PM";

type LocaleOption = "en-US" | "en-UK";

type TimeZones =
  | "UTC"
  | "PST"
  | "EST"
  | "CST"
  | "MST"
  | "IST"
  | "GMT"
  | "CET"
  | "EET"
  | "JST"
  | "AEST"
  | "AKST"
  | "HST"
  | "AST"
  | "NST"
  | "SST"
  | "CHST"
  | "BST"
  | "WET"
  | "EAT"
  | "MSK"
  | "SAMT"
  | "PKT"
  | "ICT"
  | "SGT"
  | "CST-China"
  | "KST"
  | "AEDT"
  | "NZST"
  | "FJT"
  | "HKT";

export type FormatDateOptions = {
  date: Date;
  format?: FormatPattern;
  locale?: LocaleOption;
  replaceFormat?: ReplaceReg;
  timeZone?: TimeZones;
};

export type FormatTimeOptions = {
  date: Date;
  format?: TimeFormatPattern;
  locale?: LocaleOption;
  replaceFormat?: ReplaceReg;
  timeZone?: TimeZones;
};

export type DataGroup<T> = {
  data: T[];
  key: keyof T;
};
