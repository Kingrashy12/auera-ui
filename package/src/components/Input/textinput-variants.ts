import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";

type TextInputVariants = VProps<typeof input>;
type TextInput_IVariants = VProps<typeof input_interface>;

const input = cva(
  `w-full h-full outline-none border-none flex-1 text-black tone-dark:text-white bg-transparent
   caret-blue-500 font-inter font-medium placeholder:text-neutral-400 text-sm transition-[color_0.3s_ease]`,
  {
    variants: {},
  }
);

const input_interface = cva(
  "flex justify-between w-full items-center relative gap-2 px-3 py-2 h-[42px]",
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-[6px]",
        md: "rounded-[8px]",
        lg: "rounded-[10px]",
        xl: "rounded-[12px]",
        full: "rounded-full",
      },
      variant: {
        outline: "shadow-sm input-outline",
        solid: "input-solid",
        ghost: "input-ghost",
        unstyled: "",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-85",
      },
    },
    defaultVariants: {
      variant: "outline",
      radius: "md",
      disabled: false,
    },
  }
);

export { input, input_interface };

export type { TextInputVariants, TextInput_IVariants };
