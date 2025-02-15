import { defineClass, merge, tw } from "stywind";
import { baseButtonClass } from "./globalStyles";
import { ButtonProps } from "@/types/auera-ui";
import { cva } from "class-variance-authority";
import { SchemeVariant, VProps } from "@/types/auera-system";

const colorSchemeBackgrounds = {
  primary: tw(
    baseButtonClass,
    defineClass(
      "bg-blue-600 shadow-frost-blue border-frost-blue hover:bg-blue-700"
    )
  ),
  success: tw(
    baseButtonClass,
    defineClass(
      "bg-green-600 shadow-frost-success border-frost_success hover:bg-green-700"
    )
  ),
  danger: tw(
    baseButtonClass,
    defineClass(
      "bg-red-600 shadow-frost-danger border-frost-danger hover:bg-red-700"
    )
  ),
  warning: tw(
    baseButtonClass,
    defineClass(
      "bg-yellow-500 shadow-frost-warn border-frost_warn hover:bg-yellow-700"
    )
  ),
};

const colorSchemeText = {
  primary: defineClass("text-blue-500"),
  success: defineClass("text-green-500"),
  danger: defineClass("text-red-500"),
  warning: defineClass("text-yellow-500"),
};

const lightButtonStyles = {
  primary: tw(
    baseButtonClass,
    "shadow-frost-light-primary border-frost-light-primary hover:bg-frost-light-hover"
  ),
  success: tw(
    baseButtonClass,
    "shadow-frost-light-success border-frost-light-success hover:bg-frost-success-hover"
  ),
  danger: tw(
    baseButtonClass,
    "shadow-frost-light-danger border-frost-light-danger hover:bg-frost-danger-hover"
  ),
  warning: tw(
    baseButtonClass,
    "shadow-frost-light-warn border-frost-light-warn hover:bg-frost-warn-hover"
  ),
};

const hoverStylesGhost = {
  primary: defineClass("hover:bg-blue-100 tone-dark:hover:bg-dark-soft-blue"),
  success: defineClass("hover:bg-green-100 tone-dark:hover:bg-dark-soft-green"),
  danger: defineClass("hover:bg-red-100 tone-dark:hover:bg-dark-soft-red"),
  warning: defineClass(
    "hover:bg-yellow-100 tone-dark:hover:bg-dark-soft-yellow"
  ),
};

const flatHoverStyles = {
  primary: defineClass("hover:bg-blue-100 tone-dark:hover:bg-slate-900"),
  success: defineClass("hover:bg-green-100 tone-dark:hover:bg-slate-900"),
  danger: defineClass("hover:bg-red-100 tone-dark:hover:bg-slate-900"),
  warning: defineClass("hover:bg-yellow-100 tone-dark:hover:bg-slate-900"),
};

const button_frost = ({ colorScheme }: ButtonProps) => {
  const textColor = merge.single(colorSchemeText, colorScheme as SchemeVariant);

  const lightVariantClass = merge.single(
    lightButtonStyles,
    colorScheme as SchemeVariant
  );

  return cva("", {
    variants: {
      variant: {
        solid: [
          colorSchemeBackgrounds[colorScheme as SchemeVariant],
          "text-white",
        ],
        light: [textColor, lightVariantClass, "border-1.7"],
        ghost: [hoverStylesGhost[colorScheme as SchemeVariant], textColor],
        flat: [
          "border border-none",
          textColor,
          lightVariantClass,
          flatHoverStyles[colorScheme as SchemeVariant],
        ],
        outline: [
          baseButtonClass,
          "border-2 shadow-[var(--auera-neutral-100)_0_-1px_0_1px_inset,_var(--auera-neutral-200)_0_1px_2px_0] \
          tone-dark:shadow-[var(--auera-neutral-800)_0_-1px_0_1px_inset,_var(--auera-neutral-900)_0_1px_2px_0] \
        bg-white text-black hover:bg-gray-100 border-neutral-300 tone-dark:bg-black \
        tone-dark:text-white tone-dark:hover:bg-slate-900 tone-dark:border-neutral-800",
        ],
        unstyled: "text-black tone-dark:text-white",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  });
};

export default button_frost;
export type FrostVariants = VProps<typeof button_frost>;
