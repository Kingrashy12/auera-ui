import { defineClass, merge, tw } from "stywind";
import { ButtonProps } from "../../../types/auera-ui";
import { ButtonVariant, SchemeVariant } from "../../../types/auera-system";

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

// Main function to generate button classes based on variant and color schemes
const generateButtonClass = ({ variant, colorScheme }: ButtonProps) => {
  const textColor = merge.single(
    textColorSchemes,
    colorScheme as SchemeVariant
  );
  const borderColor = merge.single(
    borderColorSchemes,
    colorScheme as SchemeVariant
  );
  const dimmedBackground = merge.single(
    dimmedBackgroundSchemes,
    colorScheme as SchemeVariant
  );
  const hoverBackground = merge.single(
    hoverBackgroundSchemes,
    colorScheme as SchemeVariant
  );
  const lightHoverEffect = merge.single(
    hoverDimDarkSchemes,
    colorScheme as SchemeVariant
  );
  const hoverDimmedBackground = merge.single(
    ghostHover,
    colorScheme as SchemeVariant
  );

  // Define button variant with combined classes
  const solidButton = tw(
    merge.single(backgroundSchemes, colorScheme as SchemeVariant),
    "text-white",
    hoverBackground
  );

  const lightButton = tw(
    textColor,
    "border-[1.25px]",
    dimmedBackground,
    borderColor,
    lightHoverEffect
  );

  const ghostButton = tw(textColor, hoverDimmedBackground);

  const outlineButton = defineClass(
    "border-2 auera-btn-outline-base shadow-sm"
  );

  const flatButton = tw(
    "border-none",
    dimmedBackground,
    textColor,
    lightHoverEffect
  );

  // Return the corresponding button class based on the variant
  const buttonVariant = {
    solid: solidButton,
    light: lightButton,
    ghost: ghostButton,
    outline: outlineButton,
    flat: flatButton,
  };

  return tw(merge.single(buttonVariant, variant as ButtonVariant));
};

export { generateButtonClass };
