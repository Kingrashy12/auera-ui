export const skeletonRef = [
  {
    prop: "className",
    type: "string",
    description: "Additional custom class for the skeleton component.",
    default: "undefined",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "full"',
    description:
      "Defines the border radius of the skeleton, with `full` creating a circular shape.",
    default: "sm",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If `true`, the skeleton will take up the full available width.",
    default: "false",
  },
  {
    prop: "width",
    type: "number | string",
    description:
      "Specifies the width of the skeleton. Accepts a number (px) or string (e.g., '100%').",
    default: "undefined",
  },
  {
    prop: "height",
    type: "number | string",
    description:
      "Specifies the height of the skeleton. Accepts a number (px) or string (e.g., 'auto').",
    default: "undefined",
  },
  {
    prop: "style",
    type: "CSSProperties",
    description: "Inline styles for further customization.",
    default: "undefined",
  },
];
