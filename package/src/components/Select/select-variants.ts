import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";

type SelectTriggerVariants = VProps<typeof trigger>;
type SelectContentVariants = VProps<typeof content>;
type SelectItemVariants = VProps<typeof item>;

const trigger = cva(
  `flex items-center justify-between mt-1 border-1.9 shadow-sm border-neutral-200
   tone-dark:border-neutral-800 cursor-pointer gap-2 px-3 py-2 h-[42px] focus:outline-none
    focus:ring-0 hover:bg-gray-50 tone-dark:hover:bg-neutral-700 transition-transform
    focus:ring-blue-500 bg-white tone-dark:bg-black`,
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      size: {},
    },
    defaultVariants: {
      radius: "md",
    },
  }
);

const content = cva(
  `fixed z-100 bg-white shadow-card border-1.9 shrink-0 w-full tone-dark:bg-black
  border-neutral-200 tone-dark:border-neutral-700 tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]
   flex-col p-2`,
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      open: {
        true: "flex",
        false: "hidden",
      },
    },
    defaultVariants: {
      radius: "md",
      open: false,
    },
  }
);

const item = cva(
  `cursor-pointer p-2 hover:bg-gray-100 text-sm flex items-center
   justify-between tone-dark:hover:bg-neutral-700 font-inter`,
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      active: {
        true: "font-semibold",
        false: "font-normal",
      },
    },
    defaultVariants: {
      radius: "md",
      active: false,
    },
  }
);

export { trigger, content, item };
export type {
  SelectTriggerVariants,
  SelectContentVariants,
  SelectItemVariants,
};
