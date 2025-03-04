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
    prop: "zIndex",
    type: '"80" | "100" | "150" | "200" | "250" | "300" | "350" | "400" | "450" | "500" | "550" | "600" | "650" | "700" | "750" | "800" | "850" | "900" | "950" | "1000"',
    description: "Controls visibility order",
    default: "500",
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
  {
    prop: "preventScroll",
    type: "boolean",
    description:
      "Determines if background scrolling is disabled when the modal is open.",
    default: "false",
  },
];

const panel = [
  {
    prop: "size",
    type: '"auto" | "sm" | "md" | "lg" | "xl" | "full" | "full-screen"',
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
  {
    prop: "placement",
    type: '"top" | "center" | "bottom"',
    description: "Defines the vertical position of the modal on the screen.",
    default: "center",
  },
  {
    prop: "transition",
    type: '"walkIn" | "dropIn" | "slideIn"',
    description:
      "Specifies the animation style used when the modal appears on the screen.",
    default: "walkIn",
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
