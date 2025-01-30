import { defineClass, tw } from "stywind";
import { baseButtonClass } from "./globalStyles";
import { ButtonProps } from "@/types/auera-ui";
import { SchemeVariant } from "@/types/auera-system";
import { cva } from "class-variance-authority";

const defaultNeumorphicEffect = defineClass("hover:scale-[1.02]");

const colorSchemeBackgrounds = {
  primary: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-blue-600 shadow-neumorphic-solid-primary \
       hover:shadow-neumorphic-solid-primary_hover border-[1.8px]"
    )
  ),
  success: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-green-600 border-[1.8px] shadow-neumorphic-solid-success \
       hover:shadow-neumorphic-solid-success_hover"
    )
  ),
  danger: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-red-600 shadow-neumorphic-solid-danger \
       hover:shadow-neumorphic-solid-danger_hover border-[1.8px]"
    )
  ),
  warning: tw(
    defaultNeumorphicEffect,
    baseButtonClass,
    defineClass(
      "bg-yellow-500 shadow-neumorphic-solid-warn \
       hover:shadow-neumorphic-solid-warn_hover border-[1.8px]"
    )
  ),
};

const colorSchemeText = {
  primary: defineClass("text-blue-500"),
  success: defineClass("text-green-500"),
  danger: defineClass("text-red-500"),
  warning: defineClass("text-yellow-500"),
};

const colorSchemeBorders = {
  primary: defineClass("border-blue-500"),
  success: defineClass("border-green-500"),
  danger: defineClass("border-red-500"),
  warning: defineClass("border-yellow-500"),
};

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

const dimmedHoverStyles = {
  primary: defineClass("hover:bg-blue-100 tone-dark:hover:bg-dark-soft-blue"),
  success: defineClass("hover:bg-green-100 tone-dark:hover:bg-dark-soft-green"),
  danger: defineClass("hover:bg-red-100 tone-dark:hover:bg-dark-soft-red"),
  warning: defineClass(
    "hover:bg-yellow-100 tone-dark:hover:bg-dark-soft-yellow"
  ),
};

const lightHoverStyles = {
  primary: defineClass("hover:bg-blue-200"),
  success: defineClass("hover:bg-green-200"),
  danger: defineClass("hover:bg-red-200"),
  warning: defineClass("hover:bg-yellow-200"),
};

const button_neumorphic = ({ colorScheme }: ButtonProps) => {
  const textColor = colorSchemeText[colorScheme as SchemeVariant];
  const dimmedBackground = dimmedBackgroundStyles[colorScheme as SchemeVariant];
  const hoverDimmedBackground = dimmedHoverStyles[colorScheme as SchemeVariant];

  const ghostButton = tw(textColor, hoverDimmedBackground);
  const flatButton = tw("border-none", dimmedBackground, textColor);

  const outlineButton = tw(
    baseButtonClass,
    defineClass(
      "border shadow-neumorphic-outline bg-transparent hover:shadow-neumorphic-outline_hover \
    tone-dark:text-white border-black text-black"
    )
  );

  const lightButton = tw(
    textColor,
    "border-[1.25px]",
    dimmedBackground,
    colorSchemeBorders[colorScheme as SchemeVariant],
    lightHoverStyles[colorScheme as SchemeVariant]
  );

  return cva("active:scale-70", {
    variants: {
      variant: {
        solid: [
          colorSchemeBackgrounds[colorScheme as SchemeVariant],
          "text-white tone-dark:border-black border-transparent",
        ],
        light: [lightButton],
        ghost: [ghostButton],
        outline: [outlineButton],
        flat: [flatButton],
        unstyled: "text-black tone-dark:text-white",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  });
};

export default button_neumorphic;
