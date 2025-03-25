import neobrutalism from "@/_styles_/neobrutalism";
import { cva } from "class-variance-authority";

const button_neobrutalism = cva(
  `active:scale-[.99] ${neobrutalism.__DEFAULT}`,
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
        light: "",
        outline: "text-black tone-dark:text-gray-300 bg-transparent",
        flat: "",
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
      {
        variant: "flat",
        colorScheme: "primary",
        class:
          "text-blue-500 tone-dark:text-blue-600 bg-blue-100 tone-dark:bg-blue-600/30 hover:bg-blue-200 tone-dark:hover:bg-blue-800/30 shadow-blue-400 tone-dark:shadow-blue-800/30",
      },
      {
        variant: "flat",
        colorScheme: "warning",
        class:
          "text-yellow-500 tone-dark:text-yellow-600 bg-yellow-100 tone-dark:bg-yellow-600/30 hover:bg-yellow-200 tone-dark:hover:bg-yellow-800/30 shadow-yellow-600 tone-dark:shadow-yellow-800/30",
      },
      {
        variant: "flat",
        colorScheme: "success",
        class:
          "text-green-500 tone-dark:text-green-600 bg-green-100 tone-dark:bg-green-600/30 hover:bg-green-200 tone-dark:hover:bg-green-800/30 shadow-green-600 tone-dark:shadow-green-800/30",
      },
      {
        variant: "flat",
        colorScheme: "danger",
        class:
          "text-red-500 tone-dark:text-red-600 bg-red-100 tone-dark:bg-red-600/30 hover:bg-red-200 tone-dark:hover:bg-red-800/30 shadow-red-600 tone-dark:shadow-red-800/30",
      },
    ],
    defaultVariants: {
      colorScheme: "primary",
      variant: "solid",
    },
  }
);

export default button_neobrutalism;
