export const boxRef = [
  {
    prop: "centered",
    type: "boolean",
    description:
      "If true, centers the content both vertically and horizontally within the Box.",
    default: "false",
  },
  {
    prop: "direction",
    type: '"row" | "column"',
    description: "Specifies the layout direction of the Box.",
    default: "row",
  },
  {
    prop: "wrap",
    type: "boolean",
    description:
      "Enables wrapping for items if they exceed the available space in a row layout.",
    default: "false",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If true, the Box will take up the full width of its container.",
    default: "false",
  },
];
