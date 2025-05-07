import theme from "@/_styles_/theme";
import { colorKey, zIndexVariants } from "@/utils/keys";
import { VProps } from "auera-ui";
import { cva } from "class-variance-authority";
import { tw } from "stywind";

type ItemVariants = VProps<typeof item>;
type ListVariants = VProps<typeof list>;

export const list = cva(
  tw(
    `w-auto h-auto top-8 left-0 z-500 rounded-xl absolute border-1.9 gap-0
  flex flex-col transition-transform duration-300 shadow-[4px_5px_10px]
  flex-shrink-0`,
    theme.__border,
    theme.__shadow,
    theme.__content_bg
  ),
  {
    variants: {
      zIndex: zIndexVariants,
      showDivider: {
        true: tw("divide-y", theme.__divide),
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
  tw(
    `transition-transform duration-300 flex items-center p-[0.62rem]
  cursor-pointer gap-2 flex-shrink-0 w-full font-inter
  font-medium select-none text-sm leading-5 top-6`,
    theme.__hover
  ),
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
