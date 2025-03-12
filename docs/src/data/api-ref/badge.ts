export const badgeRef = [
  {
    prop: "variant",
    type: '"solid" | "soft" | "outline"',
    description:
      "Defines the badge's visual style. 'Solid' has a filled background, 'Soft' has a subtle tone, and 'Outline' has a bordered style.",
    default: "solid",
  },
  {
    prop: "colorScheme",
    type: '"blue" | "red" | "yellow" | "green" | "neutral" | "thick" | "teal" | "gray"',
    description:
      "Specifies the color theme of the badge. Choose from predefined colors like blue, red, yellow, etc.",
    default: "blue",
  },
  {
    prop: "className",
    type: "string",
    description:
      "Allows custom styling by passing additional Tailwind CSS classes.",
    default: "undefined",
  },
  {
    prop: "asDiv",
    type: "boolean",
    description:
      "If true, renders the badge as a <div> instead of a <span>, which is useful for layout flexibility.",
    default: "false",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description:
      "Determines the color mode. 'Light' uses a light theme, 'Dark' uses a dark theme, and 'System' adapts to user preferences.",
    default: "System",
  },
];
