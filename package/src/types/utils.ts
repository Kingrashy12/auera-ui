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

export type ClassValue =
  | string
  | Record<string, boolean | undefined>
  | false
  | null
  | undefined;

export type Merge = {
  /**
   * Performs a multi-level merge.
   * @param {any} data - The data object containing nested properties.
   * @param {string} condition - The primary condition or key to access data.
   * @param {any} rt_condition - The secondary key or condition for deeper access.
   * @returns {string} - The resulting value from the merged data based on conditions.
   *
   * @example
   * const buttonClass = {
   *   light: {
   *     solid: "bg-blue-500",
   *     outline: "border border-gray-500"
   *   },
   *   dark: {
   *     solid: "bg-blue-700",
   *     outline: "border border-gray-800"
   *   }
   * };
   * merge.multi(buttonClass, "light", "solid"); // Returns: "bg-blue-500"
   */
  multi: (data: any, condition: string, rt_condition: any) => string;

  /**
   * Performs a single-level merge.
   * @param {any} data - The data object containing properties.
   * @param {string} condition - The key or condition to access data.
   * @returns {string} - The resulting value from the merged data based on the condition.
   *
   * @example
   * const data = { solid: "bg-blue-500", outline: "border border-gray-500" };
   * merge.single(data, "solid"); // Returns: "bg-blue-500"
   */
  single: (data: any, condition: string) => string;
};
