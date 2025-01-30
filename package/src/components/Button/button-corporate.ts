import { cva } from "class-variance-authority";
import { ButtonProps } from "@/types/auera-ui";
import { SchemeVariant, VProps } from "@/types/auera-system";
import { defineClass } from "stywind";

// Background color schemes
const backgroundSchemes = {
  primary: defineClass("bg-blue-500"),
  success: defineClass("bg-green-500"),
  danger: defineClass("bg-red-500"),
  warning: defineClass("bg-yellow-500"),
};

// Hover background color schemes
const hoverBackgroundSchemes = {
  primary: defineClass("hover:bg-blue-600"),
  success: defineClass("hover:bg-green-600"),
  danger: defineClass("hover:bg-red-600"),
  warning: defineClass("hover:bg-yellow-600"),
};

// Text color schemes
const textColorSchemes = {
  primary: defineClass("text-blue-500"),
  success: defineClass("text-green-500"),
  danger: defineClass("text-red-500"),
  warning: defineClass("text-yellow-500"),
};

// Border color schemes
const borderColorSchemes = {
  primary: defineClass("border-blue-500"),
  success: defineClass("border-green-500"),
  danger: defineClass("border-red-500"),
  warning: defineClass("border-yellow-500"),
};

// Dimmed background schemes
const dimmedBackgroundSchemes = {
  primary: defineClass("bg-corprate-dimmed-primary"),
  success: defineClass("bg-corprate-dimmed-success"),
  danger: defineClass("bg-corprate-dimmed-danger"),
  warning: defineClass("bg-corprate-dimmed-warn"),
};

// Hover dimmed background schemes (light)
const ghostHover = {
  primary: defineClass("hover:bg-corprate-ghost-primary-hover"),
  success: defineClass("hover:bg-corprate-ghost-success-hover"),
  danger: defineClass("hover:bg-corprate-ghost-danger-hover"),
  warning: defineClass("hover:bg-corprate-ghost-warn-hover"),
};

// Hover dimmed background schemes (darker shade)
const hoverDimDarkSchemes = {
  primary: defineClass("hover:bg-corprate-light-primary-hover"),
  success: defineClass("hover:bg-corprate-light-success-hover"),
  danger: defineClass("hover:bg-corprate-light-danger-hover"),
  warning: defineClass("hover:bg-corprate-light-warn-hover"),
};

const button_corporate = ({ colorScheme }: ButtonProps) => {
  return cva("", {
    variants: {
      variant: {
        solid: [
          backgroundSchemes[colorScheme as SchemeVariant],
          "text-white",
          hoverBackgroundSchemes[colorScheme as SchemeVariant],
        ],
        light: [
          textColorSchemes[colorScheme as SchemeVariant],
          "border-[1.25px]",
          dimmedBackgroundSchemes[colorScheme as SchemeVariant],
          borderColorSchemes[colorScheme as SchemeVariant],
          hoverDimDarkSchemes[colorScheme as SchemeVariant],
        ],
        ghost: [
          textColorSchemes[colorScheme as SchemeVariant],
          ghostHover[colorScheme as SchemeVariant],
        ],
        outline: [
          "border-2 shadow-sm bg-white text-black hover:bg-gray-100 \
             border-neutral-300 tone-dark:bg-black tone-dark:text-white \
              tone-dark:hover:bg-slate-900 tone-dark:border-neutral-800",
        ],
        flat: [
          "border-none",
          dimmedBackgroundSchemes[colorScheme as SchemeVariant],
          textColorSchemes[colorScheme as SchemeVariant],
          hoverDimDarkSchemes[colorScheme as SchemeVariant],
        ],
        unstyled: "text-black tone-dark:text-white",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  });
};

export default button_corporate;
export type CorporateVariants = VProps<typeof button_corporate>;
