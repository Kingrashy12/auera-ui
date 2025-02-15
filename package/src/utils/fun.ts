import { Currency } from "../types/utils";

/**
 * Utility functions for string manipulation.
 *
 * Read more: [AueraUI Docs](https://aueraui.vercel.app/docs/utils/strfun)
 */
export const StrFun = {
  /**
   * Capitalizes each word in a string based on the specified delimiters.
   *
   * @example
   * // Capitalize words separated by hyphens and join with spaces
   * StrFun.capitalize("hello-world", "-", " ");
   * // Returns: "Hello World"
   */
  capitalize(str: string, reg: string, joinReg: string): string {
    return str
      .toLowerCase()
      .split(reg)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(joinReg);
  },
  truncate(text: string, len = 10): string {
    return text.length > len ? text.slice(0, len) + "..." : text;
  },
};

export const formatCurrency = <T extends Currency>(
  value: number,
  currency: T
) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
};
