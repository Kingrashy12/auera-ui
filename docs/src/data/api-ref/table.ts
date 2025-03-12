const root = [
  {
    prop: "rounded",
    type: "boolean",
    description:
      "Applies rounded corners to the table for a softer, modern look.",
    default: "false",
  },
  {
    prop: "bordered",
    type: "boolean",
    description:
      "Adds borders around table cells to clearly define rows and columns.",
    default: "false",
  },
  {
    prop: "noBorder",
    type: "boolean",
    description: "Removes all table borders for a minimalistic appearance.",
    default: "false",
  },
  {
    prop: "raised",
    type: "boolean",
    description:
      "Applies a subtle shadow effect to the table for an elevated look.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional CSS classes to style the table.",
    default: "undefined",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the table’s color mode. Defaults to the system theme.",
    default: "System",
  },
  {
    prop: "classNames",
    type: "object",
    description:
      "Allows customization of specific table elements with custom class names.",
    default: "undefined",
    properties: {
      container: {
        type: "string",
        description: "CSS class for styling the table container.",
        default: "undefined",
      },
    },
  },
];

const head = [
  {
    prop: "tint",
    type: "boolean",
    description:
      "Applies a background color to the table header for better contrast.",
    default: "false",
  },
];

const row = [
  {
    prop: "verticalLine",
    type: "boolean",
    description:
      "Adds vertical dividers between columns for improved readability.",
    default: "false",
  },
  {
    prop: "hoverable",
    type: "boolean",
    description: "Highlights table rows on hover to enhance user experience.",
    default: "false",
  },
];

export const tableRef = { root, row, head };
