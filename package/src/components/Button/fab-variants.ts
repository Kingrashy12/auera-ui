import { cva } from "class-variance-authority";
import { VProps } from "../../types/auera-system";
import neobrutalism from "@/_styles_/neobrutalism";
import { tw } from "stywind";

const fab = cva(
  `flex items-center justify-center animate-walkIn cursor-pointer flex-shrink-0
     rounded-full shadow transition-all duration-300 active:scale-95`,
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
      },
      disabled: {
        true: "pointer-events-none opacity-75 cursor-not-allowed",
      },
      size: {
        sm: "w-7 h-7",
        md: "w-9 h-9",
        lg: "w-11 h-11",
        xl: "w-[50px] h-[50px]",
        "2xl": "w-14 h-14",
      },
      color: {
        blue: "",
        red: "",
        yellow: "",
        green: "",
        neutral: "",
        thick: "",
        teal: "",
        gray: "",
      },
      type: {
        fixed: "fixed",
        relative: "relative",
        absolute: "absolute",
        sticky: "sticky",
        static: "static",
      },
      position: {
        left: "left-6 bottom-6",
        right: "right-6 bottom-6",
      },
      design: {
        corporate: "",
        neobrutalism: tw(neobrutalism.__DEFAULT, "shadow-[4px_4px_0px_black]"),
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "blue",
        class:
          "bg-blue-500 tone-dark:bg-blue-600 hover:bg-blue-600 tone-dark:hover:bg-blue-700 text-white",
      },
      {
        variant: "solid",
        color: "red",
        class:
          "bg-red-500 tone-dark:bg-red-600 hover:bg-red-600 tone-dark:hover:bg-red-700 text-white",
      },
      {
        variant: "solid",
        color: "yellow",
        class:
          "bg-yellow-500 tone-dark:bg-yellow-600 hover:bg-yellow-600 tone-dark:hover:bg-yellow-500 text-white",
      },
      {
        variant: "solid",
        color: "green",
        class:
          "bg-green-500 tone-dark:bg-green-600 hover:bg-green-600 tone-dark:hover:bg-green-700 text-white",
      },
      {
        variant: "solid",
        color: "teal",
        class:
          "bg-teal-500 tone-dark:bg-teal-600 hover:bg-teal-600 tone-dark:hover:bg-teal-700 text-white",
      },
      {
        variant: "solid",
        color: "neutral",
        class:
          "bg-neutral-500 tone-dark:bg-neutral-600 hover:bg-neutral-600 tone-dark:hover:bg-neutral-700 text-white",
      },
      {
        variant: "solid",
        color: "gray",
        class:
          "bg-gray-500 tone-dark:bg-gray-600 hover:bg-gray-600 tone-dark:hover:bg-gray-700 text-white",
      },
      {
        variant: "solid",
        color: "thick",
        class:
          "bg-gray-800 text-white hover:bg-gray-900 tone-dark:bg-white tone-dark:hover:bg-gray-200 tone-dark:text-gray-800",
      },
      // Soft
      {
        variant: "soft",
        color: "blue",
        class:
          "bg-blue-200 text-blue-700 hover:bg-blue-300 tone-dark:text-blue-500 tone-dark:bg-blue-700/30 tone-dark:hover:bg-blue-800/30",
      },
      {
        variant: "soft",
        color: "red",
        class:
          "bg-red-200 text-red-600 hover:bg-red-300 tone-dark:text-red-500 tone-dark:bg-red-700/30 tone-dark:hover:bg-red-800/30",
      },
      {
        variant: "soft",
        color: "green",
        class:
          "bg-green-200 text-green-600 hover:bg-green-300 tone-dark:text-green-500 tone-dark:bg-green-700/30 tone-dark:hover:bg-green-800/30",
      },
      {
        variant: "soft",
        color: "yellow",
        class:
          "bg-yellow-200 text-yellow-700 hover:bg-yellow-300 tone-dark:text-yellow-500 tone-dark:bg-yellow-700/30 tone-dark:hover:bg-yellow-800/30",
      },
      {
        variant: "soft",
        color: "teal",
        class:
          "bg-teal-200 text-teal-700 hover:bg-teal-300 tone-dark:text-teal-500 tone-dark:bg-teal-700/30 tone-dark:hover:bg-teal-800/30",
      },
      {
        variant: "soft",
        color: "gray",
        class:
          "bg-gray-200 text-gray-700 hover:bg-gray-300 tone-dark:text-gray-500 tone-dark:bg-gray-800/30 tone-dark:hover:bg-gray-700/30",
      },
      {
        variant: "soft",
        color: "neutral",
        class:
          "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 tone-dark:text-neutral-500 tone-dark:bg-neutral-800/30 tone-dark:hover:bg-neutral-700/30",
      },
      {
        variant: "soft",
        color: "thick",
        class:
          "bg-black/10 text-neutral-700 hover:bg-black/20 tone-dark:text-black tone-dark:bg-white/90 tone-dark:hover:bg-white",
      },
      // Outline
      {
        variant: "outline",
        color: "blue",
        class:
          "border border-blue-500 text-blue-500 hover:bg-blue-100 tone-dark:hover:bg-blue-800/30",
      },
      {
        variant: "outline",
        color: "red",
        class:
          "border border-red-500 text-red-500 hover:bg-red-100 tone-dark:hover:bg-red-800/30",
      },
      {
        variant: "outline",
        color: "green",
        class:
          "border border-green-500 text-green-500 hover:bg-green-100 tone-dark:hover:bg-green-800/30",
      },
      {
        variant: "outline",
        color: "yellow",
        class:
          "border border-yellow-500 text-yellow-500 hover:bg-yellow-100 tone-dark:hover:bg-yellow-800/30",
      },
      {
        variant: "outline",
        color: "gray",
        class:
          "border border-gray-500 text-gray-500 hover:bg-gray-100 tone-dark:hover:bg-gray-800/30",
      },
      {
        variant: "outline",
        color: "neutral",
        class:
          "border border-neutral-500 text-neutral-500 hover:bg-neutral-100 tone-dark:hover:bg-neutral-800/30",
      },
      {
        variant: "outline",
        color: "teal",
        class:
          "border border-teal-500 text-teal-500 hover:bg-teal-100 tone-dark:hover:bg-teal-800/30",
      },
      {
        variant: "outline",
        color: "thick",
        class:
          "border border-gray-800 tone-dark:border-gray-200 tone-dark:text-gray-200 text-gray-800 hover:bg-gray-200/70 tone-dark:hover:bg-gray-800/30",
      },
      //
      {
        variant: "soft",
        color: "blue",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px_var(--auera-blue-400)] border-none tone-dark:shadow-blue-950",
      },
      {
        variant: "soft",
        color: "red",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px_var(--auera-red-400)] border-none tone-dark:shadow-red-950",
      },
      {
        variant: "soft",
        color: "green",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px_var(--auera-green-400)] border-none tone-dark:shadow-green-950",
      },
      {
        variant: "soft",
        color: "gray",
        design: "neobrutalism",
        class: "shadow-[4px_4px_0px_var(--auera-gray-400)] border-none",
      },
      {
        variant: "soft",
        color: "neutral",
        design: "neobrutalism",
        class: "shadow-[4px_4px_0px_var(--auera-neutral-400)] border-none",
      },
      {
        variant: "soft",
        color: "teal",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px] shadow-teal-400 tone-dark:shadow-teal-950 border-none",
      },
      {
        variant: "soft",
        color: "yellow",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px] shadow-yellow-400 tone-dark:shadow-yellow-950 border-none",
      },
      {
        variant: "soft",
        color: "thick",
        design: "neobrutalism",
        class:
          "shadow-[4px_4px_0px] shadow-neutral-400 tone-dark:shadow-neutral-600 border-none",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "blue",
      disabled: false,
      size: "md",
      type: "fixed",
      position: "right",
      design: "corporate",
    },
  }
);

export { fab };

export type FabVariants = VProps<typeof fab>;
