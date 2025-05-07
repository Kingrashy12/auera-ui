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

/**
 * Paginates an array of data by slicing it according to the current page and the number of items per page.
 *
 * @template T - The type of the data being paginated.
 * @param {T[]} data - The array of data to paginate.
 * @param {number} currentPage - The current page number (1-based index).
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {T[]} A sliced array of data corresponding to the specified page and items per page.
 *
 * @example
 * const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * paginate(data, 1, 3); // => [1, 2, 3]
 * paginate(data, 2, 3); // => [4, 5, 6]
 * paginate(data, 3, 3); // => [7, 8, 9]
 * paginate(data, 4, 3); // => [10]
 */
export const paginate = <T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

/**
 * Formats a number into a human-readable string with "K", "M", or "B" suffixes.
 *
 * @param {number} num - The number to format.
 * @param {number} [decimals=2] - The number of decimal places to include (default is 2).
 * @returns {string} The formatted number as a string.
 *
 * @example
 * formatNumber(950);        // => "950"
 * formatNumber(1500);       // => "1.50K"
 * formatNumber(2500000);    // => "2.50M"
 * formatNumber(5300000000); // => "5.30B"
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(decimals) + "K";
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(decimals) + "M";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + "B";
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

/**
 * Converts a byte value into a human-readable string with appropriate size units (KB, MB, GB, etc.).
 *
 * @param {number} bytes - The number of bytes to convert.
 * @param {number} [decimals=2] - The number of decimal places to include (default is 2).
 * @returns {string} The formatted size as a string with the appropriate unit (e.g., "1.23 MB").
 *
 * @example
 * formatBytes(1024);          // => "1 KB"
 * formatBytes(1048576);       // => "1 MB"
 * formatBytes(123456789);     // => "117.74 MB"
 * formatBytes(9876543210);    // => "9.21 GB"
 * formatBytes(0);             // => "0 Bytes"
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**
 * Removes duplicate objects from an array based on a nested key path.
 *
 * @template T - The type of the objects in the array.
 * @param {T[]} arr - The array of objects to filter.
 * @param {string} path - The path to the key (supports nested keys with dot notation, e.g., "address.street").
 * @returns {T[]} A new array containing only unique objects based on the specified key path.
 *
 * @example
 * const arr = [
 *   { name: "John", address: { street: "st1" } },
 *   { name: "Jane", address: { street: "st2" } },
 *   { name: "Doe", address: { street: "st1" } }
 * ];
 *
 * removeDuplicatesByPath(arr, "address.street");
 * // => [{ name: "John", address: { street: "st1" } }, { name: "Jane", address: { street: "st2" } }]
 */
export const removeDuplicatesByPath = <T>(arr: T[], path: string): T[] => {
  const uniqueMap = new Map<string | number, T>();

  const getValueByPath = (obj: any, path: string): any => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  for (const item of arr) {
    const keyValue = getValueByPath(item, path);
    if (keyValue !== undefined && !uniqueMap.has(keyValue)) {
      uniqueMap.set(keyValue, item);
    }
  }

  return Array.from(uniqueMap.values());
};

/**
 * Checks if any of the specified fields are empty or falsy in the given object.
 *
 * @template T - The type of the object being checked.
 * @param {T} currentValues - The object containing values to check.
 * @param {Array<keyof T>} fieldsToCheck - An array of field names to validate for non-empty values.
 * @returns {boolean} Returns `true` if any field is empty or falsy; otherwise, `false`.
 *
 * @example
 * const form = { name: "John", email: "" };
 * disableOnEmptyValues(form, ["name", "email"]); // => true (email is empty)
 *
 * const form2 = { name: "Jane", email: "jane@example.com" };
 * disableOnEmptyValues(form2, ["name", "email"]); // => false (all fields filled)
 */
export const disableOnEmptyValues = <T>(
  currentValues: T,
  fieldsToCheck: Array<keyof T>
) => {
  const allFieldsFilled = fieldsToCheck.every((field) => currentValues[field]);
  return !allFieldsFilled;
};

/**
 * Checks if specified fields have equal values between two objects.
 *
 * @template T - The type of the objects being compared.
 * @param {T} currentValues - The current object containing values to check.
 * @param {Array<keyof T>} fieldsToCompare - An array of field names to compare between the two objects.
 * @param {T} referenceValues - The reference object to compare against.
 * @returns {boolean} Returns `true` if all specified fields have equal values; otherwise, `false`.
 *
 * @example
 * const current = { name: "John", age: 25 };
 * const reference = { name: "John", age: 25 };
 * disableOnEqualValues(current, ["name", "age"], reference); // => true
 *
 * const current2 = { name: "Jane", age: 30 };
 * disableOnEqualValues(current2, ["name", "age"], reference); // => false
 */
export const disableOnEqualValues = <T>(
  currentValues: T,
  fieldsToCompare: Array<keyof T>,
  referenceValues: T
) => {
  const areValuesEqual = fieldsToCompare.every(
    (field) => currentValues[field] === referenceValues[field]
  );
  return areValuesEqual;
};

/**
 * Formats a duration in seconds into a human-readable time format (HH:MM:SS).
 *
 * @param {number} time - The time duration in seconds.
 * @returns {string} A string representing the duration in the format HH:MM:SS, or MM:SS if hours are 0.
 *
 * @example
 * formatDuration(3600);    // => "01:00:00"
 * formatDuration(3661);    // => "01:01:01"
 * formatDuration(59);      // => "00:59"
 * formatDuration(732);     // => "12:12"
 */
export const formatDuration = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return [
    hours > 0 ? String(hours).padStart(2, "0") : null,
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");
};
