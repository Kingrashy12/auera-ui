export const mapitems_ref = [
  {
    prop: "data",
    type: "T[]",
    description: "An array of data items to be rendered.",
    default: "undefined",
  },
  {
    prop: "renderItem",
    type: "function",
    description: "Function to render each item in the list.",
    default: "undefined",
  },
  {
    prop: "emptyListComponent",
    type: "ReactNode",
    description: "Optional component displayed when the data array is empty.",
    default: "undefined",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional CSS class for the container.",
    default: "undefined",
  },
  {
    prop: "direction",
    type: '"row" | "column"',
    description: "Layout direction (row or column) for the container.",
    default: "row",
  },
];
