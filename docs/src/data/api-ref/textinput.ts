export const textinputRef = [
  {
    prop: "variant",
    type: '"solid" | "outline" | "ghost" | "unstyled"',
    description: "Defines the visual style of the input interface.",
    default: "outline",
  },
  {
    prop: "radius",
    type: '"none" | "sm" | "md" | "lg" | "xl" | "full"',
    description:
      "Controls the border-radius of the input interface, affecting its rounded corners.",
    default: "md",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the color mode for the input",
    default: "system",
  },
  {
    prop: "inputClass",
    type: "string",
    description:
      "Allows custom class names to be applied to the input element.",
    default: "undefined",
  },
  {
    prop: "icon",
    type: "ElementType",
    description: "Renders an icon inside the input field.",
    default: "undefined",
  },
  {
    prop: "iconSize",
    type: "number",
    description: "Defines the size of the icon inside the input field.",
    default: "undefined",
  },
];
