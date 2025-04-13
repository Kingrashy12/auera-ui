import { colorKey, zIndexVariants } from "@/utils/keys";
import { VProps } from "auera-ui";
import { cva } from "class-variance-authority";

type ItemVariants = VProps<typeof item>;
type ListVariants = VProps<typeof list>;

export const list = cva(
  `w-auto  h-auto top-8 left-0 z-500 rounded-xl absolute border tone-dark:border-neutral-800
      border-neutral-200 flex flex-col transition-transform duration-300 shadow-[4px_5px_10px_rgba(255,255,255,0.05)]
       flex-shrink-0 bg-white tone-dark:bg-black`,
  {
    variants: {
      zIndex: zIndexVariants,
      showDivider: {
        true: "divide-y",
      },
      isVisible: {
        true: "animate-dropIn",
        false: "animate-dropOut",
      },
    },
    defaultVariants: {
      zIndex: "100",
      showDivider: false,
    },
  }
);

export const item = cva(
  `transition-transform duration-300 flex items-center p-[0.62rem]
    cursor-pointer gap-2 hover:bg-gray-100 flex-shrink-0 w-full font-inter
    tone-dark:hover:bg-neutral-800 font-medium select-none text-sm leading-5 top-6`,
  {
    variants: {
      disabled: {
        true: "pointer-events-none opacity-75 cursor-not-allowed",
      },
      color: colorKey,
      useColorOnHover: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        color: "danger",
        class: "hover:bg-red-50 tone-dark:hover:bg-red-800/30",
      },
      {
        useColorOnHover: true,
        color: "success",
        class: "hover:bg-green-50 tone-dark:hover:bg-green-800/30",
      },
      {
        useColorOnHover: true,
        color: "info",
        class: "hover:bg-blue-50 tone-dark:hover:bg-blue-800/30",
      },
      {
        useColorOnHover: true,
        color: "error",
        class: "hover:bg-red-50 tone-dark:hover:bg-red-800/30",
      },
      {
        useColorOnHover: true,
        color: "warning",
        class: "hover:bg-yellow-50 tone-dark:hover:bg-yellow-800/30",
      },
    ],
    defaultVariants: {
      color: "default",
      disabled: false,
      useColorOnHover: false,
    },
  }
);

export type { ItemVariants, ListVariants };
