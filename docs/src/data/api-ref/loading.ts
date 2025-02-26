export const loadingRef = [
  {
    prop: "isLoading",
    type: "boolean",
    description:
      "Controls the loading state. If true, a loader or spinner is displayed.",
    default: "false",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    description: "Specifies the size of the loader (small, medium, or large).",
    default: "md",
  },
  {
    prop: "color",
    type: "ColorPair",
    description:
      "Defines the color of the loader. Accepts a valid color token.",
    default: "blue-500",
  },
  {
    prop: "loader",
    type: '"bounce" | "spin" | "wave"',
    description: "Type of loader animation.",
    default: "bounce",
  },
  {
    prop: "spinner",
    type: "ReactNode",
    description: "Allows passing a custom spinner component.",
    default: "undefined",
  },
  {
    prop: "error",
    type: "boolean",
    description:
      "Indicates whether an error has occurred. If true, the error state is displayed.",
    default: "false",
  },
  {
    prop: "empty",
    type: "boolean",
    description:
      "Indicates whether there is no data. If true, the emptyComponent is shown.",
    default: "false",
  },
  {
    prop: "renderError",
    type: "ReactNode",
    description: "Custom component to render when an error occurs.",
    default: "undefined",
  },
  {
    prop: "emptyComponent",
    type: "ReactNode",
    description: "Custom component to render when no data is available.",
    default: "undefined",
  },
  {
    prop: "keepOut",
    type: "boolean",
    description: "Hide all content when set to true.",
    default: "false",
  },
];
