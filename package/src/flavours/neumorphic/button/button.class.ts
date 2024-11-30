import { defineClass, merge, tw } from "stywind";
import { ButtonProps } from "../../../types/auera-ui";
import {
  ButtonVariant,
  ModeType,
  SchemeVariant,
} from "../../../types/auera-system";
import { baseButtonClass } from "../../global";

// Default neumorphic scaling effect
const defaultNeumorphicEffect = defineClass("hover:scale-[1.02]");

// Background styles for different color schemes
const colorSchemeBackgrounds = {
  primary: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-blue-600 shadow-neumorphic-solid-primary hover:shadow-neumorphic-solid-primary_hover border-[1.8px]"
    )
  ),
  success: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-green-600 border-[1.8px] shadow-neumorphic-solid-success hover:shadow-neumorphic-solid-success_hover"
    )
  ),
  danger: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-red-600 shadow-neumorphic-solid-danger hover:shadow-neumorphic-solid-danger_hover border-[1.8px]"
    )
  ),
  warning: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-yellow-500 shadow-neumorphic-solid-warn hover:shadow-neumorphic-solid-warn_hover border-[1.8px]"
    )
  ),
};

// Text color styles for different color schemes
const colorSchemeText = {
  primary: defineClass("text-blue-500"),
  success: defineClass("text-green-500"),
  danger: defineClass("text-red-500"),
  warning: defineClass("text-yellow-500"),
};

// Border color styles for different color schemes
const colorSchemeBorders = {
  primary: defineClass("border-blue-500"),
  success: defineClass("border-green-500"),
  danger: defineClass("border-red-500"),
  warning: defineClass("border-yellow-500"),
};

// Dimmed background styles for neumorphic buttons
const dimmedBackgroundStyles = {
  primary: defineClass(
    "bg-blue-100 shadow-neumorphic-flat-primary hover:shadow-neumorphic-flat-primary_hover"
  ),
  success: defineClass(
    "bg-green-100 shadow-neumorphic-flat-success hover:shadow-neumorphic-flat-success_hover"
  ),
  danger: defineClass(
    "bg-red-100 shadow-neumorphic-flat-danger hover:shadow-neumorphic-flat-danger_hover"
  ),
  warning: defineClass(
    "bg-yellow-100 shadow-neumorphic-flat-warn hover:shadow-neumorphic-flat-warn_hover"
  ),
};

// Hover styles for dimmed buttons based on mode
const dimmedHoverStyles = {
  light: {
    primary: defineClass("hover:bg-blue-100"),
    success: defineClass("hover:bg-green-100"),
    danger: defineClass("hover:bg-red-100"),
    warning: defineClass("hover:bg-yellow-100"),
  },
  dark: {
    primary: defineClass("hover:bg-dark-soft-blue"),
    success: defineClass("hover:bg-dark-soft-green"),
    danger: defineClass("hover:bg-dark-soft-red"),
    warning: defineClass("hover:bg-dark-soft-yellow"),
  },
};

// Alternative hover styles for dimmed buttons
const alternativeHoverStyles = {
  primary: defineClass("hover:bg-blue-200"),
  success: defineClass("hover:bg-green-200"),
  danger: defineClass("hover:bg-red-200"),
  warning: defineClass("hover:bg-yellow-200"),
};

// Main function to generate neumorphic button styles
const generateNeumorphicButton = ({
  variant,
  colorScheme,
  mode,
}: ButtonProps) => {
  const textColor = merge.single(colorSchemeText, colorScheme as SchemeVariant);
  const borderColor = merge.single(
    colorSchemeBorders,
    colorScheme as SchemeVariant
  );
  const dimmedBackground = merge.single(
    dimmedBackgroundStyles,
    colorScheme as SchemeVariant
  );
  const hoverDimmedBackground = merge.multi(
    dimmedHoverStyles,
    mode as ModeType,
    colorScheme as SchemeVariant
  );
  const alternativeHoverBackground = merge.single(
    alternativeHoverStyles,
    colorScheme as SchemeVariant
  );

  // Define button variant
  const solidButton = tw(
    merge.single(colorSchemeBackgrounds, colorScheme as SchemeVariant),
    "text-white",
    mode === "dark" ? defineClass("border-black") : ""
  );
  const lightButton = tw(
    textColor,
    "border-[1.25px]",
    dimmedBackground,
    borderColor,
    alternativeHoverBackground
  );
  const ghostButton = tw(textColor, hoverDimmedBackground);
  const outlineButton = tw(
    baseButtonClass,
    defineClass(
      "border shadow-neumorphic-outline  bg-transparent hover:shadow-neumorphic-outline_hover"
    ),
    mode === "dark" ? "text-white border-black" : "text-black"
  );
  const flatButton = tw("border-none", dimmedBackground, textColor);

  // Map variant to their respective styles
  const buttonVariant = {
    solid: solidButton,
    light: lightButton,
    ghost: ghostButton,
    outline: outlineButton,
    flat: flatButton,
  };

  // Return the final button style based on the selected variant
  return tw(merge.single(buttonVariant, variant as ButtonVariant));
};

export { generateNeumorphicButton };
