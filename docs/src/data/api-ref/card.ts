export const cardRef = [
  {
    prop: "direction",
    type: '"row" | "column"',
    description: "The direction of the card's content layout.",
    default: "column",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "The visual mode of the card.",
    default: "system",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "Whether the card should take up the full width of its container.",
    default: "false",
  },
  {
    prop: "centerContent",
    type: "boolean",
    description: "If card content should be centered",
    default: "false",
  },
  {
    prop: "variant",
    type: '"flat" | "raised"',
    description: "The variant of the card",
    default: "raised",
  },
  {
    prop: "renderImage",
    type: "function",
    description: "Renders a custom image component",
    default: "undefined",
  },
  {
    prop: "header",
    type: "ReactNode",
    description: "slot for a header component",
    default: "undefined",
  },
  {
    prop: "footer",
    type: "ReactNode",
    description: "slot for a footer component",
    default: "undefined",
  },
  {
    prop: "classNames",
    type: "object",
    description: "Custom classes for component parts",
    default: "undefined",
    properties: {
      root: {
        type: "string",
        description: "Classes for the root element",
        default: "undefined",
      },
      body: {
        type: "string",
        description: "Classes for the body element",
        default: "undefined",
      },
    },
  },
  {
    prop: "img",
    type: "object",
    description: "Image configuration for the card",
    default: "undefined",
    properties: {
      src: {
        type: "string",
        description: "The source URL of the image",
        default: "undefined",
      },
      alt: {
        type: "string",
        description: "The alt text for accessibility",
        default: "undefined",
      },
      className: {
        type: "string",
        description: "className for the image",
        default: "undefined",
      },
      width: {
        type: "string | number",
        description: "The width of the image",
        default: "undefined",
      },
      height: {
        type: "string | number",
        description: "The height of the image",
        default: "undefined",
      },
      style: {
        type: "object",
        description: "Additional CSS styles for the image",
        default: "undefined",
      },
    },
  },
];
