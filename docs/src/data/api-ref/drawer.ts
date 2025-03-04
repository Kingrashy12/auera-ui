const drawer = [
  {
    prop: "preventClose",
    type: "boolean",
    description:
      "Prevents the drawer component from closing when clicked outside",
    default: "false",
  },
  {
    prop: "intensity",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"',
    description: "Controls the intensity of the drop component backdrop.",
    default: "sm",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the theme mode for the backdrop component.",
    default: "system",
  },
  {
    prop: "value*",
    type: "string",
    description:
      "Provides the drawer's value, typically used for managing the active state.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "Custom class for the Drawer",
    default: "undefined",
  },
  {
    prop: "zIndex",
    type: '"80" | "100" | "150" | "200" | "250" | "300" | "350" | "400" | "450" | "500" | "550" | "600" | "650" | "700" | "750" | "800" | "850" | "900" | "950" | "1000"',
    description: "Controls visibility order",
    default: "500",
  },
  {
    prop: "preventScroll",
    type: "boolean",
    description:
      "Determines if background scrolling is disabled when the drawer is open.",
    default: "false",
  },
];

const panel = [
  {
    prop: "position",
    type: '"left" | "right"',
    description: "The drawer position",
    default: "right",
  },
  {
    prop: "type",
    type: '"float" | "sticky"',
    description: "Drawer variant type",
    default: "sticky",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description:
      "A shared theme mode across other drawer component ('Header','Footer')",
    default: "system",
  },
];

const header = [
  {
    prop: "showBorder",
    type: "boolean",
    description: "Adds border-bottom to the component.",
    default: "true",
  },
];

const content = [
  {
    prop: "centerContent",
    type: "boolean",
    description: "Centers all it content",
    default: "false",
  },
];

const footer = [
  {
    prop: "showBorder",
    type: "boolean",
    description: "Adds border-top to the component.",
    default: "true",
  },
  {
    prop: "position",
    type: '"right" | "left"',
    description: "Specifies the alignment of the footer content.",
    default: "right",
  },
];

export const drawerRef = {
  drawer,
  panel,
  header,
  content,
  footer,
};
