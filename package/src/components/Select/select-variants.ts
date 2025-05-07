import { tw } from "stywind";
import { VProps } from "../../types/auera-system";
import { cva } from "class-variance-authority";
import theme from "@/_styles_/theme";

type SelectTriggerVariants = VProps<typeof trigger>;
type SelectContentVariants = VProps<typeof content>;
type SelectItemVariants = VProps<typeof item>;

const trigger = cva(
  tw(
    `flex items-center justify-between mt-1 cursor-pointer
   gap-2 px-3 py-2 h-auto max-h-[70px] focus:outline-none focus:ring-0
   transition-transform font-inter`,
    theme.__hover_select_trigger
  ),
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
        // "bg-white border-neutral-300 shadow-neutral-200 border-1.9 shadow-sm tone-dark:bg-neutral-900 tone-dark:border-neutral-700 tone-dark:hover:bg-neutral-800 tone-dark:shadow-black",
        outline: tw(
          "border-1.9 shadow-sm",
          theme.__content_bg,
          theme.__border,
          theme.__shadow
        ),
        ghost:
          "bg-transparent border-none border-transparent outline-none shadow-none",
      },
      size: {},
      disabled: {
        true: "cursor-not-allowed opacity-80",
      },
    },
    defaultVariants: {
      radius: "md",
      variant: "outline",
      disabled: false,
    },
  }
);

const content = cva(
  tw(
    `fixed z-400 shadow-[0_4px_10px] border-1.9 shrink-0 w-full flex-col`,
    theme.__border,
    theme.__shadow,
    theme.__content_bg
  ),
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
        flush: tw("p-0 divide-y", theme.__divide),
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
  tw(
    `cursor-pointer text-sm flex items-center
   justify-between font-inter tone-dark:text-white`,
    theme.__hover
  ),
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
      disabled: {
        true: "cursor-not-allowed opacity-80",
      },
    },
    defaultVariants: {
      radius: "md",
      active: false,
      variant: "padded",
      disabled: false,
    },
  }
);

export { trigger, content, item };
export type {
  SelectTriggerVariants,
  SelectContentVariants,
  SelectItemVariants,
};
