export const imageRef = [
  {
    prop: "className",
    type: "string",
    description: "Additional custom class for the Image component.",
    default: "undefined",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If `true`, the image takes the full width of its container. Passed to Skeleton.",
    default: "false",
  },
  {
    prop: "isLoading",
    type: "boolean",
    description:
      "If `true`, a skeleton placeholder is shown while the image loads.",
    default: "false",
  },
  {
    prop: "radius",
    type: '"md" | "lg" | "none" | "sm" | "xl" | "full"',
    description: "Defines the border radius of the image. Passed to Skeleton.",
    default: "undefined",
  },
  {
    prop: "styles",
    type: "CSSProperties",
    description: "Inline styles for the image. Passed to Skeleton.",
    default: "undefined",
  },
];
