import { VProps } from "../../types/auera-system";
import { cva } from "class-variance-authority";

type SelectTriggerVariants = VProps<typeof trigger>;
type SelectContentVariants = VProps<typeof content>;
type SelectItemVariants = VProps<typeof item>;

const trigger = cva(
  `flex items-center justify-between mt-1 cursor-pointer
   gap-2 px-3 py-2 h-auto max-h-[70px] focus:outline-none focus:ring-0
    hover:bg-gray-50 tone-dark:hover:bg-neutral-900 transition-transform
    focus:ring-blue-500 font-inter`,
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
      variant: {
        outline:
          "bg-white border-1.9 shadow-sm tone-dark:bg-black border-neutral-200 tone-dark:border-neutral-900",
        ghost: "bg-transparent border-none outline-none shadow-none",
      },
      size: {},
    },
    defaultVariants: {
      radius: "md",
      variant: "outline",
    },
  }
);

const content = cva(
  `fixed z-100 bg-white shadow-card border-1.9 shrink-0 w-full tone-dark:bg-black
  border-neutral-200 tone-dark:border-neutral-900 tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]
   flex-col`,
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
      variant: {
        padded: "p-2",
        flush: "p-0 divide-y tone-dark:divide-neutral-900",
      },
    },
    defaultVariants: {
      radius: "md",
      open: false,
      variant: "padded",
    },
  }
);

const item = cva(
  `cursor-pointer hover:bg-gray-100 text-sm flex items-center
   justify-between tone-dark:hover:bg-neutral-900 font-inter`,
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
      variant: {
        padded: "p-2",
        flush: "p-3 rounded-none",
      },
    },
    defaultVariants: {
      radius: "md",
      active: false,
      variant: "padded",
    },
  }
);

export { trigger, content, item };
export type {
  SelectTriggerVariants,
  SelectContentVariants,
  SelectItemVariants,
};
