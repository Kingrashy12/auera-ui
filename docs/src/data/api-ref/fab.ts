export const fabRef = [
  {
    prop: "type",
    type: '"fixed" | "relative" | "absolute" | "sticky" | "static"',
    description:
      "Defines the CSS position property of the Floating Action Button (Fab).",
    default: "fixed",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg" | "xl" | "2xl"',
    description:
      "Specifies the size of the Fab, ranging from small (sm) to extra-large (2xl).",
    default: "sm",
  },
  {
    prop: "variant",
    type: '"solid" | "soft" | "outline"',
    description:
      "Determines the visual style of the Fab: solid, soft, or outlined.",
    default: "solid",
  },
  {
    prop: "position",
    type: '"left" | "right"',
    description:
      "Sets the horizontal position of the Fab on the screen (left or right).",
    default: "right",
  },
  {
    prop: "color",
    type: '"blue" | "red" | "yellow" | "green" | "neutral" | "thick" | "teal" | "gray"',
    description: "Defines the color theme of the Fab.",
    default: "blue",
  },
  {
    prop: "mode",
    type: '"dark" | "light"',
    description:
      "Determines whether the Fab is displayed in dark or light mode.",
    default: "System",
  },
];
