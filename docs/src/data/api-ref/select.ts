const select = [
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "2xl"',
    description: "Defines the border-radius of the select component.",
    default: "md",
  },
  {
    prop: "className",
    type: "string",
    description: "Allows custom styling by adding additional CSS classes.",
    default: "undefined",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the theme mode of the select component.",
    default: "System",
  },
];

const selectTrigger = [
  {
    prop: "variant",
    type: '"outline" | "ghost"',
    description: "Determines the visual style of the select trigger.",
    default: "outline",
  },
  {
    prop: "className",
    type: "string",
    description: "Allows custom styling by adding additional CSS classes.",
    default: "undefined",
  },
  {
    prop: "placeholder*",
    type: "string",
    description: "Text displayed when no option is selected.",
    default: "undefined",
  },
];

const selectContent = [
  {
    prop: "variant",
    type: '"padded" | "flush"',
    description:
      "Defines the spacing inside the dropdown. 'padded' adds spacing, while 'flush' removes it for a compact look.",
    default: "padded",
  },
  {
    prop: "openFn",
    type: "function",
    description: "Callback function triggered when the select content opens.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "Allows additional CSS classes for custom styling.",
    default: "undefined",
  },
  {
    prop: "style",
    type: "CSSProperties",
    description:
      "Allows inline styles to be applied directly to the select content.",
    default: "undefined",
  },
];

const selectItem = [
  {
    prop: "value*",
    type: "string",
    description: "The unique identifier for the select item. Required.",
    default: "undefined",
  },
  {
    prop: "onSelect",
    type: "function",
    description: "Callback function triggered when the item is selected.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
    default: "undefined",
  },
  {
    prop: "isCurrent",
    type: "boolean",
    description: "Indicates if the item is currently selected.",
    default: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables the item, preventing selection.",
    default: "false",
  },
];

export const selectRef = {
  select,
  selectContent,
  selectTrigger,
  selectItem,
};
