import { FileHandler } from "../types/auera-ui";
import { Currency, DataGroup } from "../types/utils";

/**
 * A collection of utility functions for string manipulation
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

export const formatCurrency = (
  value: number,
  currency: Currency,
  allowNegativeValue = false
) => {
  let num = allowNegativeValue ? value : Math.max(0, value);

  const ngn_local = "₦" + num.toLocaleString();
  if (currency === "NGN") return ngn_local;

  return num.toLocaleString("en-US", {
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

/**
 * Handles file extraction from the `onFileUpload` prop in the `FileUpload` component.
 * It processes the uploaded file and provides the extracted file data to the given callback.
 *
 * @param {Function} callback - A function that receives the uploaded file data.
 * @returns {FileHandler} A function that processes a single or multiple uploaded files.
 *
 * @example
 *   // Define a file handler using handleFileUpload
 * const handleFile = handleFileUpload((file) => {
 *   // Extract main file and base64 data if a single file is uploaded
 *   const mainFile = Array.isArray(file) ? null : file.main;
 *   const base64File = Array.isArray(file) ? null : file.base64;
 *
 *   // Store multiple files in an array
 *   const fileArray = Array.isArray(file) ? file : [];
 *
 *   console.log(mainFile, base64File, fileArray);
 * });
 *
 * // Pass it as a prop to the FileUpload component
 * <FileUpload onFileUpload={handleFile}>
 *   // Other file upload components
 * </FileUpload>
 */

export const handleFileUpload = (fileHandler: FileHandler): FileHandler =>
  fileHandler;

export const paginate = <T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

export const hasEmptyFields = <T>(arg: T, fields: Array<keyof T>): boolean => {
  const hasAllFields = fields.every((val) => arg[val]);
  return !hasAllFields;
};

export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(2) + "K";
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  }
  return num.toString();
};

export const sortByKey = <T>(arr: T[], key: keyof T): T[] => {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

export const removeDuplicates = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
