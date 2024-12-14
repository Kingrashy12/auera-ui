export const backdropRef = [
  {
    prop: "open*",
    type: "boolean",
    description: "Determines whether the backdrop is visible or hidden",
    default: "false",
  },
  {
    prop: "onClose*",
    type: "function",
    description: "Function triggered when backdrop is clicked or dismissed",
    default: "undefined",
  },
  {
    prop: "children",
    type: "ReactNode",
    description: "The content to be displayed within the backdrop",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description:
      "Allows you to apply a custom CSS class to the Backdrop. Use this prop to add additional styling or override default styles.",
    default: "undefined",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the theme mode for the backdrop component.",
    default: "light",
  },
  {
    prop: "intensity",
    type: '"none" | "sm" | "md" | "lg" | "xl"',
    description: "Controls the intensity of the drop component backdrop.",
    default: "sm",
  },
  {
    prop: "centerContent",
    type: "boolean",
    description: "Centers the content within the backdrop",
    default: "false",
  },
  {
    prop: "preventClose",
    type: "boolean",
    description:
      "Prevents the backdrop component from closing when clicked outside or on the close button.",
    default: "false",
  },
];
