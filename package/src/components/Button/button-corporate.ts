import { cva } from "class-variance-authority";
import { VProps } from "../../types/auera-system";

const button_corporate = cva(
  "active:scale-95 data-[disabled=true]:active:scale-100",
  {
    variants: {
      variant: {
        outline: [
          `border-1.9 shadow-sm bg-white text-black hover:bg-gray-100/50 
             border-neutral-300 tone-dark:bg-black tone-dark:text-white 
              tone-dark:hover:bg-neutral-700/30 tone-dark:border-neutral-800`,
        ],
        solid: "text-white",
        ghost: "bg-transparent",
        unstyled: "text-black tone-dark:text-white",
      },
      colorScheme: {
        primary: "",
        success: "",
        danger: "",
        warning: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        class: "bg-blue-600 hover:bg-blue-700",
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: "bg-red-600 hover:bg-red-700",
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: "bg-green-600 hover:bg-green-700",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        class: "bg-yellow-500 hover:bg-yellow-600",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        class:
          "text-blue-500 tone-dark:text-blue-600 hover:bg-blue-100 tone-dark:hover:bg-blue-800/30",
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        class:
          "text-red-500 tone-dark:text-red-600 hover:bg-red-100 tone-dark:hover:bg-red-800/30",
      },
      {
        variant: "ghost",
        colorScheme: "success",
        class:
          "text-green-500 tone-dark:text-green-600 hover:bg-green-100 tone-dark:hover:bg-green-800/30",
      },
      {
        variant: "ghost",
        colorScheme: "warning",
        class:
          "text-yellow-500 tone-dark:text-yellow-600 hover:bg-yellow-100 tone-dark:hover:bg-yellow-800/30",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
    },
  }
);

export default button_corporate;
export type CorporateVariants = VProps<typeof button_corporate>;
