import { Currency, DataGroup } from "../types/utils";

/**
 * Utility functions for string manipulation.
 *
 * Read more: [AueraUI Docs](https://aueraui.vercel.app/docs/utilities/strfun)
 */
export const StrFun = {
  /**
   * Capitalizes each word in a string based on the specified delimiters.
   */
  capitalize(str: string, reg: string, joinReg: string): string {
    return str
      .toLowerCase()
      .split(reg)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(joinReg);
  },

  /**
   * Truncates a string to the specified length and appends "..." if truncated.
   */
  truncate(text: string, len = 10): string {
    return text.length > len ? text.slice(0, len) + "..." : text;
  },

  /**
   * Converts a string to a URL-friendly slug by removing spaces and special characters.
   */
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  /**
   * Removes all whitespace (spaces, tabs, new lines) from a string.
   */
  removeWhitespace(text: string): string {
    return text.replace(/\s+/g, "");
  },

  /**
   * Reverses a given string.
   */
  reverse(text: string): string {
    return text.split("").reverse().join("");
  },

  /**
   * Converts a string to camelCase.
   */
  toCamelCase(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
  },

  /**
   * Converts a string to PascalCase.
   */
  toPascalCase(text: string): string {
    return text.replace(/(^\w|[-_\s]\w)/g, (match) =>
      match.replace(/[-_\s]/, "").toUpperCase()
    );
  },

  /**
   * Converts a string to snake_case.
   */
  toSnakeCase(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^\w-]/g, "")
      .replace(/-+/g, "_");
  },

  /**
   * Converts a string to kebab-case.
   */
  toKebabCase(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .replace(/_+/g, "-");
  },

  /**
   * Counts the number of words in a string.
   */
  wordCount(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
  },

  /**
   * Removes all special characters from a string.
   */
  removeSpecialChars(text: string): string {
    return text.replace(/[^\w\s]/gi, "");
  },

  /**
   * Checks if a string is a palindrome (same forward and backward).
   */
  isPalindrome(text: string): boolean {
    const cleanStr = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
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

/**
 * Groups an array of objects by a specified key.
 *
 * @template T - The type of objects in the data array.
 * @param {Object} params - The function parameters.
 * @param {T[]} params.data - The array of objects to be grouped.
 * @param {keyof T} params.key - The key to group by.
 * @returns {Record<string, T[]>} An object where the keys are the unique values of the specified key and the values are arrays of matching objects.
 *
 * @example
 * const data = [
 *   { category: "A", name: "Item 1" },
 *   { category: "B", name: "Item 2" },
 *   { category: "A", name: "Item 3" }
 * ];
 *
 * const grouped = groupData({ data, key: "category" });
 * console.log(grouped);
 * // {
 * //   A: [{ category: "A", name: "Item 1" }, { category: "A", name: "Item 3" }],
 * //   B: [{ category: "B", name: "Item 2" }]
 * // }
 */
export const groupData = <T>({
  data,
  key,
}: DataGroup<T>): Record<string, T[]> => {
  const grouped: Record<string, T[]> = {};

  for (const item of data) {
    const group_key = String(item[key]);

    if (!grouped[group_key]) {
      grouped[group_key] = [];
    }

    grouped[group_key].push(item);
  }

  return grouped;
};
