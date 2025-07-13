import neobrutalism from "@/_styles_/neobrutalism";
import { cva } from "class-variance-authority";

const button_neobrutalism = cva(
  `active:scale-[.99] data-[disabled=true]:active:scale-100 ${neobrutalism.__DEFAULT}`,
  {
    variants: {
      colorScheme: {
        primary: "",
        success: "",
        danger: "",
        warning: "",
      },
      variant: {
        solid: "text-white",
        outline: "text-black tone-dark:text-gray-300 bg-transparent",
        ghost: "",
        unstyled: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        class: "bg-blue-600",
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: "bg-red-600",
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: "bg-green-600",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        class: "bg-yellow-500",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        class:
          "border-none shadow-none tone-dark:shadow-none hover:bg-blue-50 tone-dark:hover:bg-blue-800/30 hover:shadow-[4px_4px_0px_var(--auera-blue-300)] tone-dark:hover:shadow-[4px_4px_0px] tone-dark:hover:shadow-blue-800/60 text-blue-600",
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        class:
          "border-none shadow-none tone-dark:shadow-none hover:bg-red-50 tone-dark:hover:bg-red-800/30 hover:shadow-[4px_4px_0px_var(--auera-red-300)] tone-dark:hover:shadow-[4px_4px_0px] tone-dark:hover:shadow-red-800/60 text-red-600",
      },
      {
        variant: "ghost",
        colorScheme: "success",
        class:
          "border-none shadow-none tone-dark:shadow-none hover:bg-green-100 tone-dark:hover:bg-green-800/30 hover:shadow-[4px_4px_0px_var(--auera-green-300)] tone-dark:hover:shadow-[4px_4px_0px] tone-dark:hover:shadow-green-800/60 text-green-600",
      },
      {
        variant: "ghost",
        colorScheme: "warning",
        class:
          "border-none shadow-none tone-dark:shadow-none hover:bg-yellow-100 tone-dark:hover:bg-yellow-800/30 hover:shadow-[4px_4px_0px_var(--auera-yellow-300)] tone-dark:hover:shadow-[4px_4px_0px] tone-dark:hover:shadow-yellow-800/60 text-yellow-500 tone-dark:text-yellow-600",
      },
    ],
    defaultVariants: {
      colorScheme: "primary",
      variant: "solid",
    },
  }
);

export default button_neobrutalism;
