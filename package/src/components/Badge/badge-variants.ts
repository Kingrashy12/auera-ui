import { cva } from "class-variance-authority";

export const badge = cva(
  `py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium font-inter rounded-full`,
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
      },
      colorScheme: {
        blue: "",
        red: "",
        yellow: "",
        green: "",
        neutral: "",
        thick: "",
        teal: "",
        gray: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "blue",
        class: "bg-blue-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "red",
        class: "bg-red-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "yellow",
        class: "bg-yellow-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "green",
        class: "bg-green-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "teal",
        class: "bg-teal-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        class: "bg-neutral-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "gray",
        class: "bg-gray-500 text-white",
      },
      {
        variant: "solid",
        colorScheme: "thick",
        class:
          "bg-gray-800 text-white tone-dark:bg-white tone-dark:text-gray-800",
      },
      //   Soft
      {
        variant: "soft",
        colorScheme: "blue",
        class:
          "bg-blue-100 text-blue-800 tone-dark:text-blue-500 tone-dark:bg-blue-800/30",
      },
      {
        variant: "soft",
        colorScheme: "red",
        class:
          "bg-red-100 text-red-800 tone-dark:text-red-500 tone-dark:bg-red-800/30",
      },
      {
        variant: "soft",
        colorScheme: "green",
        class:
          "bg-green-100 text-green-800 tone-dark:text-green-500 tone-dark:bg-green-800/30",
      },
      {
        variant: "soft",
        colorScheme: "yellow",
        class:
          "bg-yellow-100 text-yellow-800 tone-dark:text-yellow-500 tone-dark:bg-yellow-800/30",
      },
      {
        variant: "soft",
        colorScheme: "teal",
        class:
          "bg-teal-100 text-teal-800 tone-dark:text-teal-500 tone-dark:bg-teal-800/30",
      },
      {
        variant: "soft",
        colorScheme: "neutral",
        class:
          "bg-neutral-100 text-neutral-800 tone-dark:text-white tone-dark:bg-white/10",
      },
      {
        variant: "soft",
        colorScheme: "gray",
        class:
          "bg-gray-100 text-gray-800 tone-dark:text-white tone-dark:bg-white/10",
      },
      {
        variant: "soft",
        colorScheme: "thick",
        class:
          "bg-black/10 text-neutral-700 tone-dark:bg-gray-800/50 tone-dark:text-white",
      },
      //   Outline
      {
        variant: "outline",
        colorScheme: "blue",
        class: "border border-blue-500 text-blue-500",
      },
      {
        variant: "outline",
        colorScheme: "red",
        class: "border border-red-500 text-red-500",
      },
      {
        variant: "outline",
        colorScheme: "yellow",
        class: "border border-yellow-500 text-yellow-500",
      },
      {
        variant: "outline",
        colorScheme: "green",
        class: "border border-green-500 text-green-500",
      },
      {
        variant: "outline",
        colorScheme: "teal",
        class: "border border-teal-500 text-teal-500",
      },
      {
        variant: "outline",
        colorScheme: "neutral",
        class: "border border-neutral-500 text-neutral-500",
      },
      {
        variant: "outline",
        colorScheme: "gray",
        class:
          "border border-gray-500 text-gray-500 tone-dark:text-neutral-400",
      },
      {
        variant: "outline",
        colorScheme: "thick",
        class:
          "border border-gray-800 text-gray-800 tone-dark:border-neutral-200 tone-dark:text-white",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "blue",
    },
  }
);
