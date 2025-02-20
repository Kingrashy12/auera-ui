export const toastRef = [
  {
    prop: "message",
    type: "string",
    description:
      "The content of the toast notification that will be displayed to the user.",
    default: "undefined",
  },
  {
    prop: "options",
    type: "ToastOptions",
    description:
      "Additional configuration options for customizing the toast behavior and appearance.",
    default: "undefined",
    properties: {
      position: {
        type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
        description: "Determines where the toast will appear on the screen.",
        default: "top-right",
      },
      transition: {
        type: '"dropIn" | "slideIn" | "popIn" | "walkIn"',
        description:
          "Defines the animation style used when the toast appears or disappears.",
        default: "walkIn",
      },
      className: {
        type: "string",
        description:
          "Allows applying custom styles to the toast component using CSS class names.",
        default: "undefined",
      },
      key: {
        type: "string",
        description:
          "A unique identifier, primarily used for loading toasts to update or replace them dynamically.",
        default: "undefined",
      },
    },
  },
];
