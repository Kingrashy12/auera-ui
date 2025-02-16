export const collapseRef = [
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "The visual mode of the card.",
    default: "system",
  },
  {
    prop: "classNames",
    type: "object",
    description: "Custom classes",
    default: "undefined",
    properties: {
      main: {
        type: "string",
        description: "ClassName for the collapse container",
        default: "undefined",
      },
      header: {
        type: "string",
        description: "ClassName for the collapse header",
        default: "undefined",
      },
      headerLabel: {
        type: "string",
        description: "ClassName for the collapse headerLabel",
        default: "undefined",
      },
    },
  },
  {
    prop: "renderHeader",
    type: "function",
    description: "Render Custom header",
    default: "undefined",
  },
  {
    prop: "openIcon",
    type: "ReactElementType",
    description: "A custom open icon",
    default: "undefined",
  },
  {
    prop: "closeIcon",
    type: "ReactElementType",
    description: "A custom close icon",
    default: "undefined",
  },
];
