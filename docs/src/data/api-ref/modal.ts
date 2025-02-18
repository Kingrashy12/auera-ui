export const modal = [
  {
    prop: "preventClose",
    type: "boolean",
    description:
      "Prevents the Modal component from closing when clicked outside",
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
      "Provides the modal's value, typically used for managing the active state.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "Custom class for the Modal",
    default: "undefined",
  },
];

const panel = [
  {
    prop: "size",
    type: '"auto" | "sm" | "md" | "lg" | "xl" | "full"',
    description: "Size of the Panel",
    default: "auto",
  },
  {
    prop: "radius",
    type: '"md" | "lg" | "xl" | "2xl" | "3xl"',
    description: "Shape of the Panel",
    default: "md",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional string to add custom CSS classes.",
    default: "underfined",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description:
      "A shared theme mode across other modal component ('Header','Footer')",
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

export const modalRef = {
  modal,
  panel,
  header,
  content,
  footer,
};
