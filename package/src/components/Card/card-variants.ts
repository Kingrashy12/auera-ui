import { DefaultVariantsProp } from "@/types/auera-system";
import { cva, VariantProps } from "class-variance-authority";

const card = cva(
  "rounded-[10px] flex p-[20px] gap-[16px] \
    border bg-white border-neutral-200 shadow-card \
    tone-dark:bg-black tone-dark:border-neutral-800 ",
  {
    variants: {
      centerContent: {
        true: "items-center justify-center",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      hidden: {
        true: "hidden",
      },
      direction: {
        row: "flex-row",
        column: "flex-col",
      },
    },
    defaultVariants: {
      direction: "column",
      fullWidth: false,
      centerContent: false,
      hidden: false,
    },
  }
);

export default card;

export type CardVariants = VariantProps<typeof card> & DefaultVariantsProp;
