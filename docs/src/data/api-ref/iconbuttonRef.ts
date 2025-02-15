export const i_buttonRef = [
  {
    prop: "variant",
    type: '"subtle" | "outline" | "ghost"',
    description: "Visual style of the component",
    default: "subtle",
  },
  {
    prop: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    description: "Sizes of the componenet",
    default: "sm",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"',
    description: "Shape of the componenet",
    default: "md",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "The visual mode of the component.",
    default: "system",
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
  {
    prop: "active",
    type: "boolean",
    description: "",
    default: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "",
    default: "false",
  },
  {
    prop: "asChild",
    type: "boolean",
    description: "",
    default: "false",
  },
];
