export const otpRef = [
  {
    prop: "length",
    type: "number",
    description: "Number of input fields",
    default: "4",
  },
  {
    prop: "onComplete",
    type: "function",
    description: "A function excuted after user has fully entered the OTP",
    default: "undefined",
  },
  {
    prop: "classNames",
    type: "object",
    description: "Custom classes for checkbox elements",
    default: "undefined",
    properties: {
      input: {
        type: "string",
        default: "undefined",
        description: "Add className to the otp input",
      },
      interface: {
        type: "string",
        default: "undefined",
        description: "Add className to the otp interface",
      },
    },
  },
  {
    prop: "radius",
    type: '"md" | "lg" | "xl" | "full"',
    description: "",
    default: "lg",
  },
  {
    prop: "error",
    type: "boolean",
    description: "",
    default: "fasle",
  },
  {
    prop: "error",
    type: '"light" | "dark"',
    description: "",
    default: "system",
  },
];
