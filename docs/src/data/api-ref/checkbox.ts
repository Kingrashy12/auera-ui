export const checkboxRef = [
  {
    prop: "size",
    type: '"xs" | "sm" | "md"',
    description: "Controls the checkbox size.",
    default: "sm",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "full"',
    description: "Set the border radius for the checkbox",
    default: "sm",
  },
  {
    prop: "colorScheme",
    type: '"primary" | "danger" | "warning" | "success"',
    description: "Checkbox color",
    default: "primary",
  },
  {
    prop: "checked",
    type: "boolean",
    description: "Determines whether the checkbox is checked or not.",
    default: "false",
  },
  {
    prop: "onCheckChange",
    type: "function",
    description: "Callback function triggered when the checked state changes.",
    default: "undefined",
  },
  {
    prop: "color",
    type: "ColorPair",
    description: "Checkbox color, from predefined pairs",
    default: "undefined",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the checkbox and prevent click action",
    default: "undefined",
  },
  {
    prop: "classNames",
    type: "object",
    description: "Custom classes for checkbox elements",
    default: "undefined",
    properties: {
      checker: {
        type: "string",
        default: "undefined",
        description: "Add className to the checker",
      },
      container: {
        type: "string",
        default: "undefined",
        description: "Add className to the checkbox container",
      },
    },
  },
  {
    prop: "children",
    type: "ReactNode",
    description: "Checkbox content",
    default: "undefined",
  },
];
