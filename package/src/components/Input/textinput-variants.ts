import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";

type TextInputVariants = VProps<typeof input>;
type TextInput_IVariants = VProps<typeof input_interface>;

const input = cva(
  `w-full h-full outline-none border-none flex-1 text-black tone-dark:text-white bg-transparent
   caret-blue-500 font-inter block font-medium placeholder:text-neutral-400 text-sm transition-[color_0.3s_ease]`,
  {
    variants: {},
  }
);

const input_interface = cva(
  "flex justify-between w-full items-center relative gap-2 px-3 py-2 h-[42px] transition-layer duration-300 ease-in-out",
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
        outline: `shadow-sm bg-white tone-dark:bg-black border-2 border-neutral-200 tone-dark:border-neutral-800
      hover:border-blue-400 focus-within:border-blue-400 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]
      tone-dark:focus-within:border-blue-600`,

        ghost: `tone-dark:disabled:bg-neutral-700 disabled:bg-gray-100 bg-transparent focus-within:border-neutral-300
      focus-within:shadow-[0_0_0_3px_var(--auera-neutral-200)] tone-dark:focus-within:bg-neutral-800 focus-within:bg-[#F9F9F9]
      text-[#333] tone-dark:text-white tone-dark:hover:bg-neutral-800 hover:bg-neutral-100 border-2 border-transparent
      tone-dark:focus-within:shadow-[0_0_0_3px_var(--auera-neutral-600)] tone-dark:focus-within:border-transparent
      `,
        solid: `bg-[#f7f7f8] shadow-sm border-neutral-300 border-2 focus-within:shadow-[0_0_0_3px_var(--auera-neutral-200)]
        tone-dark:bg-[#232227] tone-dark:border-neutral-700 focus-within:border-neutral-300
         tone-dark:focus-within:shadow-[0_0_0_3px_var(--auera-neutral-600)]`,
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
