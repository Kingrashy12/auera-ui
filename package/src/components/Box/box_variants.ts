import { cva, VariantProps } from "class-variance-authority";

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
  },
});

export default box;

export type BoxVariants = VariantProps<typeof box>;
