import { cva } from "class-variance-authority";

const fab = cva(
  "flex items-center justify-center animate-walkIn cursor-pointer rounded-full shadow transition-all duration-300 active:scale-95",
  {
    variants: {
      size: {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
        xl: "w-12 h-12",
      },
      position: {
        "bottom-left": "left-6 bottom-6",
        "bottom-right": "right-6 bottom-6",
        "top-left": "left-6 top-6",
        "top-right": "right-6 top-6",
      },
      disabled: {
        true: "pointer-events-none opacity-75 cursor-not-allowed",
      },
    },
  }
);

export default fab;
