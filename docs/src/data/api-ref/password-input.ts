export const passwordInputRef = [
  {
    prop: "variant",
    type: '"solid" | "outline" | "ghost" | "unstyled"',
    description: "Defines the visual style of the password input.",
    default: "outline",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "full"',
    description:
      "Controls the border-radius of the input interface, affecting its rounded corners.",
    default: "md",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the color mode for the input",
    default: "system",
  },
  {
    prop: "inputClass",
    type: "string",
    description:
      "Allows custom class names to be applied to the input element.",
    default: "undefined",
  },
  {
    prop: "hideLock",
    type: "boolean",
    description: "Hides the lock icon if set to true.",
    default: "false",
  },
];
