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
        outline: `shadow-sm bg-white tone-dark:bg-black
      border-2 border-neutral-200 tone-dark:border-neutral-800
      transition-all duration-300 ease-in-out hover:border-blue-400
     focus-within:border-blue-600
      focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]
      tone-dark:focus-within:shadow-[0_0_0_2px_var(--auera-blue-700)]`,

        ghost: `tone-dark:disabled:bg-neutral-700 disabled:bg-gray-100 bg-transparent transition-layer
      focus-within:shadow-[0_0_0_1px_var(--auera-blue-500)] tone-dark:focus-within:bg-[#2E2E2E] focus-within:bg-[#F9F9F9]
      text-[#333] tone-dark:text-white tone-dark:hover:bg-neutral-700 hover:bg-neutral-100`,

        solid: `shadow-[inset_0_2px_4px_#484848] tone-dark:shadow-[inset_0_2px_4px_#CCCCCC] border
    text-[#333] tone-dark:text-white transition-layer tone-dark:bg-[#2E2E2E] bg-[#F9F9F9]
    tone-dark:disabled:bg-[#3C3C3C] disabled:bg-neutral-200 focus-within:shadow-[0_0_0_1px_var(--auera-blue-500)]
    focus-within:border-blue-500 tone-dark:hover:bg-[#3C3C3C] hover:bg-neutral-200`,
        unstyled: "",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-85 select-none",
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
