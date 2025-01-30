export const buttonRef = [
  {
    prop: "variant",
    type: '"solid" | "light" | "flat" | "outline" | "ghost"',
    description: "Specifies the visual variant of the button.",
    default: "solid",
  },
  {
    prop: "colorScheme",
    type: '"primary" | "success" | "danger" | "warning"',
    description: "Defines the color scheme for the button.",
    default: "primary",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "full"',
    description: "Sets the border radius of the button.",
    default: "sm",
  },
  {
    prop: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    description: "Controls the button size.",
    default: "md",
  },
  {
    prop: "isLoading",
    type: "boolean",
    description: "Indicates if the button is in a loading state.",
    default: "false",
  },
  {
    prop: "rightIcon",
    type: "React.ElementType",
    description: "An icon element displayed on the right-side of the Button",
    default: "null",
  },
  {
    prop: "leftIcon",
    type: "React.ElementType",
    description: "An icon element displayed on the left-side of the Button",
    default: "null",
  },
  {
    prop: "leftIconSize",
    type: "number",
    description: "Sets the size of the left-side icon.",
    default: "16",
  },
  {
    prop: "rightIconSize",
    type: "number",
    description: "Sets the size of the right-side icon.",
    default: "16",
  },
  {
    prop: "spinner",
    type: "ReactNode",
    description:
      "Custom spinner to display when the button is in a loading state.",
    default: "null",
  },
  {
    prop: "flavour",
    type: '"frost" | "corporate" | "neumorphic"',
    description: "Specifies the design flavour applied to the button.",
    default: "corporate",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the button, preventing user interaction.",
    default: "false",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description: "Sets the button to take the full width of its container.",
    default: "false",
  },
  {
    prop: "hideChildOnLoad",
    type: "boolean",
    description: "Hides the button's children while it's in a loading state.",
    default: "false",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the color mode for the drop component.",
    default: "false",
  },
  {
    prop: "withTrigger",
    type: "boolean",
    description:
      "Enables trigger functionality for the component, allowing it to open or close a specified target component.",
    default: "false",
  },
  {
    prop: "trigger",
    type: '"drawer" | "modal"',
    description: "Specifies the type of target component to be triggered.",
    default: "undefined",
  },
  {
    prop: "triggerType",
    type: '"open" | "close"',
    description:
      "Determines the type of action to perform: 'open' to display the target component or 'close' to hide it.",
    default: "undefined",
  },
  {
    prop: "triggerValue",
    type: "string",
    description:
      "A unique value used to identify the target component. This value must match the value set on the target's parent component (e.g., Modal or Drawer).",
    default: "undefined",
  },
];
