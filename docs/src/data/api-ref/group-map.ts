export const groupMapRef = [
  {
    prop: "data",
    type: "T[]",
    description: "An array of data items to be grouped and rendered.",
    default: "undefined",
  },
  {
    prop: "renderItem",
    type: "function",
    description: "A function that renders each item in the data array.",
    default: "undefined",
  },
  {
    prop: "emptyListComponent",
    type: "ReactNode",
    description:
      "An optional component to display when the data array is empty.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "An optional class name to apply to the outer container.",
    default: "undefined",
  },
  {
    prop: "dataMapClass",
    type: "string",
    description:
      "An optional class name to apply to the data-mapping container.",
    default: "undefined",
  },
  {
    prop: "direction",
    type: '"row" | "column"',
    description:
      "The direction (row or column) for the layout of the outer container.",
    default: "column",
  },
  {
    prop: "dataMapdirection",
    type: '"row" | "column"',
    description:
      "The direction (row or column) for the layout of the data-mapping container.",
    default: "column",
  },
  {
    prop: "groupByKey",
    type: "function",
    description:
      "A function to extract a key from each data item for grouping purposes.",
    default: "undefined",
  },
  {
    prop: "renderKey",
    type: "function",
    description:
      "A function to render the group key, usually displayed as a heading.",
    default: "undefined",
  },
  {
    prop: "showKeyOnHead",
    type: "boolean",
    description:
      "Determines whether to show the key as a heading above each group.",
    default: "false",
  },
];
