import { defineClass } from "stywind";

export const darkHoverStyles = {
  primary: defineClass("hover:bg-dark-soft-blue"),
  success: defineClass("hover:bg-dark-soft-green"),
  danger: defineClass("hover:bg-dark-soft-red"),
  warning: defineClass("hover:bg-dark-soft-yellow"),
};

// Base class for button styling with a thick flavour
export const baseButtonClass = defineClass(
  "border-solid border-1.7 transition-layer border-image"
);
