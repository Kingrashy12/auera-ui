import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";

const box = cva("flex relative", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
    hidden: {
      true: "hidden",
    },
    between: {
      true: "justify-between",
    },
    "items-center": {
      true: "items-center",
    },
    centered: {
      true: "items-center justify-center",
    },
  },
  defaultVariants: {
    direction: "row",
    wrap: false,
    fullWidth: false,
    centered: false,
    between: false,
    hidden: false,
    "items-center": false,
  },
});

export default box;

export type BoxVariants = VProps<typeof box>;
