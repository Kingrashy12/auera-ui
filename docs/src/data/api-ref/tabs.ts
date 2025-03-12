const tabs = [
  {
    prop: "variant",
    type: '"line" | "solid"',
    description:
      "Defines the style of the tabs. The 'line' variant has an underline indicator, while 'solid' uses filled tabs.",
    default: "line",
  },
  {
    prop: "mode",
    type: '"light" | "dark"',
    description: "Sets the theme mode for the tabs.",
    default: "system",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    description:
      "If true, makes the tabs take up the full width of their container.",
    default: "false",
  },
  {
    prop: "className",
    type: "string",
    description: "Custom CSS class to style the tabs.",
    default: "undefined",
  },
  {
    prop: "rounded",
    type: "boolean",
    description: "If true, applies rounded corners to the tabs.",
    default: "false",
  },
  {
    prop: "panel",
    type: "FunctionComponent",
    description:
      "A custom component to be used as the panel. If not provided, the default `TabPanel` component will be used.",
    default: "undefined",
  },
  {
    prop: "hideScrollBar",
    type: "boolean",
    description:
      "If true, hides the scrollbar when there are more tabs than can fit in the container.",
    default: "false",
  },
  {
    prop: "hideBorder",
    type: "boolean",
    description:
      "If true, hides the bottom border. This only applies to the 'line' variant.",
    default: "false",
  },
  {
    prop: "containerClass",
    type: "string",
    description: "Custom CSS class to style the container wrapping the tabs.",
    default: "undefined",
  },
];

const handle = [
  {
    prop: "activeColor",
    type: "ColorPair",
    description: "The color to be applied when the tab is active.",
    default: "blue-500",
  },
  {
    prop: "activeSolidColor",
    type: "ColorPair",
    description:
      "The color to be applied when the tab is active on `solid` variant.",
    default: "black",
  },
  {
    prop: "inActiveColor",
    type: "ColorPair",
    description: "The color to be applied when the tab is inactive.",
    default: "neutral-400",
  },
  {
    prop: "value",
    type: "string",
    description:
      "The unique identifier or value for the tab, typically used to track the selected tab.",
    default: "undefined",
  },
  {
    prop: "disabled",
    type: "boolean",
    description: " If true, disables the tab, preventing interaction.",
    default: "undefined",
  },
  {
    prop: "onClick",
    type: "function",
    description: ".",
    default: "undefined",
  },
  {
    prop: "icon",
    type: "ElementType",
    description: "An optional icon component to be rendered in the TabHandle.",
    default: "undefined",
  },
  {
    prop: "iconSize",
    type: "number",
    description: "The size of the icon in pixels.",
    default: "16",
  },
];

export const tabsRef = { tabs, handle };
