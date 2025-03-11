import { VProps } from "@/types/auera-system";
import { colorKey, zIndexVariants } from "@/utils/keys";
import { cva } from "class-variance-authority";

type ListVariants = VProps<typeof list>;
type ItemVariants = VProps<typeof item>;
type ContainerVariants = VProps<typeof container>;

const list = cva(
  `w-auto max-w-[20rem] h-auto top-8 left-0 z-500 rounded-xl absolute border tone-dark:border-neutral-800
    border-neutral-200 flex flex-col transition-transform duration-300 shadow-[4px_5px_10px_rgba(255,255,255,0.05)]
     flex-shrink-0 animate-walkIn bg-white tone-dark:bg-black`,
  {
    variants: {
      zIndex: zIndexVariants,
    },
    defaultVariants: {
      zIndex: "100",
    },
  }
);

const container = cva("fixed", {
  variants: {
    open: {
      true: "flex",
      false: "hidden",
    },
    zIndex: zIndexVariants,
  },
  defaultVariants: {
    zIndex: "100",
  },
});

const item = cva(
  `transition-transform duration-300 flex items-center p-[0.62rem]
    cursor-pointer gap-2 hover:bg-gray-100 flex-shrink-0 w-full font-inter
    tone-dark:hover:bg-neutral-800 font-medium select-none text-sm leading-5 top-6`,
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-75 pointer-events-none select-none",
      },
      type: {
        padded: "rounded-md",
        flush: "",
      },
      color: colorKey,
    },
    defaultVariants: {
      disabled: false,
      type: "flush",
      color: "default",
    },
  }
);

export { item, list, container };
export type { ItemVariants, ListVariants, ContainerVariants };
