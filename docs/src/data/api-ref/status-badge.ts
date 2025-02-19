export const statusBadgeRef = [
  {
    prop: "status",
    type: '"online" | "offline" | "away" | "busy"',
    description:
      "The status of the badge, one of 'online', 'offline', 'away', or 'busy'.",
    default: "online",
  },
  {
    prop: "size",
    type: '"md" | "lg"',
    description: "The size of the badge, one of 'md', or 'lg'.",
    default: "md",
  },
  {
    prop: "placement",
    type: '"right-top" | "right-bottom" | "left-top" | "left-bottom"',
    description: "Placement of the badge relative to the element.",
    default: "left-top",
  },
  {
    prop: "className",
    type: "string",
    description: "Optional className to be applied to the badge container.",
    default: "undefined",
  },
  {
    prop: "badgeClassName",
    type: "string",
    description: "Optional custom class to be applied to the badge.",
    default: "undefined",
  },
  {
    prop: "animate",
    type: "boolean",
    description: "",
    default: "false",
  },
];
