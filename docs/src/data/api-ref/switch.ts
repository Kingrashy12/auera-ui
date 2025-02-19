export const switchRef = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    description: "Defines the size of the switch.",
    default: "md",
  },
  {
    prop: "on",
    type: "boolean",
    description: "Controls the switch default state.",
    default: "false",
  },
  {
    prop: "onToggleSwitch",
    type: "function",
    description:
      "Callback function that gets triggered when the switch state changes. Receives the new state as an argument.",
    default: "undefined",
  },
  {
    prop: "unCheckColor",
    type: "ColorPair",
    description: "Specifies the color of the switch when it is turned off.",
    default: "gray-300",
  },
  {
    prop: "color",
    type: "ColorPair",
    description: "Defines the color of the switch when it is turned on.",
    default: "blue-500",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Disables interaction with the switch when set to true.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "Allows custom styling by applying additional CSS classes.",
    default: "undefined",
  },
];
