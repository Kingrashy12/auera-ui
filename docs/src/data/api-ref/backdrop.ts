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
    default: "system",
  },
  {
    prop: "intensity",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
    description: "Controls the intensity of the drop component backdrop.",
    default: "sm",
  },
  {
    prop: "zIndex",
    type: '"80" | "100" | "150" | "200" | "250" | "300" | "350" | "400" | "450" | "500" | "550" | "600" | "650" | "700" | "750" | "800" | "850" | "900" | "950" | "1000"',
    description: "Controls visibility order",
    default: "500",
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
      "Prevents the backdrop component from closing when clicked outside",
    default: "false",
  },
  {
    prop: "preventScroll",
    type: "boolean",
    description:
      "Determines if background scrolling is disabled when the backdrop is open.",
    default: "false",
  },
];
