export type LoadIndicatorProps = {
  className?: string;
  color?: string;
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
