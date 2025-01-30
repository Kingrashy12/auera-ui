import { ClassValue, Merge } from "../types/utils";
import { ReturnError } from "./error";

type TailwindClass = string;

/**
 * A utility function for defining custom Tailwind CSS class names.
 * Provides autocomplete suggestions for your class inputs
 *
 * @param className - A valid Tailwind CSS class.
 * @returns string
 * @type {import('tailwindcss/types/config')}
 *
 *@example
 * const buttonClass = defineClass("bg-blue-500 text-white px-4 py-2");
 * // buttonClass is "bg-blue-500 text-white px-4 py-2"
 */
export const defineClass = (className: TailwindClass) => className;

export const tw = (...classes: ClassValue[]) => {
  return classes
    .flatMap((cls) => {
      if (typeof cls === "string") {
        return cls; // Include string classes
      } else if (cls && typeof cls === "object") {
        // Handle object classes
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      // Ignore falsy values and non-supported types
      return [];
    })
    .join(" ");
};

/**
 * Implements the merge functions based on the defined Merge type.
 *
 * @example
 *
 * // Multi merge for nasted properties
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
 *
 * // Single merge
 * const data = { solid: "bg-blue-500", outline: "border border-gray-500" };
 * merge.single(data, "solid"); // Returns: "bg-blue-500"
 */
export const merge: Merge = {
  multi: (data, condition, rt_condition): string => {
    ReturnError.throw(
      typeof condition !== "string",
      `Expected a string, but received ${typeof condition}. Please input a string value for the condition.`
    );
    ReturnError.log(!data[condition], `No data found for ${condition}`);
    return data[condition][rt_condition];
  },

  single: (data, condition): string => {
    ReturnError.throw(
      typeof condition !== "string",
      `Expected a string, but received ${typeof condition}. Please input a string value for the condition.`
    );
    ReturnError.log(!data[condition], `No data found for ${condition}`);
    return data[condition];
  },
};
