import { defineClass, merge, tw } from "stywind";
import { ButtonProps } from "../../../types/auera-ui";
import {
  ButtonVariant,
  ModeType,
  SchemeVariant,
} from "../../../types/auera-system";
import { baseButtonClass, darkHoverStyles } from "../../global";

// Define background styles for different color schemes
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

// Define text color schemes for buttons
const colorSchemeText = {
  primary: defineClass("text-blue-500"),
  success: defineClass("text-green-500"),
  danger: defineClass("text-red-500"),
  warning: defineClass("text-yellow-500"),
};

// Define styles for light button variant
const lightButtonStyles = {
  primary: tw(
    baseButtonClass,
    defineClass(
      "shadow-frost-light-primary border-frost-light-primary hover:bg-frost-light-hover"
    )
  ),
  success: tw(
    baseButtonClass,
    defineClass(
      "shadow-frost-light-success border-frost-light-success hover:bg-frost-success-hover"
    )
  ),
  danger: tw(
    baseButtonClass,
    defineClass(
      "shadow-frost-light-danger border-frost-light-danger hover:bg-frost-danger-hover"
    )
  ),
  warning: tw(
    baseButtonClass,
    defineClass(
      "shadow-frost-light-warn border-frost-light-warn hover:bg-frost-warn-hover"
    )
  ),
};

// Define hover styles for dimmed buttons (light and dark modes)
const hoverStylesGhost = {
  light: {
    primary: defineClass("hover:bg-blue-100"),
    success: defineClass("hover:bg-green-100"),
    danger: defineClass("hover:bg-red-100"),
    warning: defineClass("hover:bg-yellow-100"),
  },
  dark: { ...darkHoverStyles }, // Use imported dark hover styles
};

// hover styles for flat buttons
const flatHoverStyles = {
  light: {
    primary: defineClass("hover:bg-blue-100"),
    success: defineClass("hover:bg-green-100"),
    danger: defineClass("hover:bg-red-100"),
    warning: defineClass("hover:bg-yellow-100"),
  },
  dark: {
    primary: defineClass("hover:bg-slate-900"),
    success: defineClass("hover:bg-slate-900"),
    danger: defineClass("hover:bg-slate-900"),
    warning: defineClass("hover:bg-slate-900"),
  },
};

// Main function to generate button styles based on props
const generateFrostButton = ({ variant, colorScheme, mode }: ButtonProps) => {
  // Determine text color and background based on the selected color scheme
  const textColor = merge.single(colorSchemeText, colorScheme as SchemeVariant);
  const lightVariantClass = merge.single(
    lightButtonStyles,
    colorScheme as SchemeVariant
  );

  // Determine hover styles for ghost variant buttons based on the mode
  const hoverVariantGhost = merge.multi(
    hoverStylesGhost,
    mode as ModeType,
    colorScheme as SchemeVariant
  );
  const flatHover = merge.multi(
    flatHoverStyles,
    mode as ModeType,
    colorScheme as SchemeVariant
  );

  // Define styles for different button variant
  const solidVariant = tw(
    merge.single(colorSchemeBackgrounds, colorScheme as SchemeVariant),
    "text-white"
  );
  const lightVariant = tw(textColor, "border-[1.25px]", lightVariantClass);
  const ghostVariant = tw(textColor, hoverVariantGhost);
  const outlineVariant = tw(
    baseButtonClass,
    defineClass("border-2 auera-btn-outline-frost auera-btn-outline-base")
  );
  const flatVariant = tw(
    "border border-none",
    lightVariantClass,
    textColor,
    flatHover
  );

  // Map button variant to their respective styles
  const buttonVariant = {
    solid: solidVariant,
    light: lightVariant,
    ghost: ghostVariant,
    outline: outlineVariant,
    flat: flatVariant,
  };

  // Return the final button style based on the selected variant
  return tw(merge.single(buttonVariant, variant as ButtonVariant));
};

export { generateFrostButton };
