import { VProps } from "@/types/auera-system";
import { defineClass } from "@/utils";
import { cva } from "class-variance-authority";

type DrawerContentVariants = VProps<typeof content>;
type DrawerHeaderVariants = VProps<typeof header>;
type DrawerFooterVariants = VProps<typeof footer>;
type DrawerPanelVariants = VProps<typeof panel>;

const content = cva(
  "flex flex-col p-3 bg-drawer-content overflow-y-auto h-full m-[5px 0] gap-[16px]",
  {
    variants: {
      centerContent: {
        true: "items-center justify-center",
      },
    },
    defaultVariants: {
      centerContent: false,
    },
  }
);

const header = cva(
  "flex items-center justify-between rounded-t-lg p-[13px] w-full bg-drawer-content",
  {
    variants: {
      showBorder: {
        true: "border-b",
        false: "",
      },
      mode: {
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        showBorder: true,
        mode: "dark",
        class: "border-b border-b-neutral-800",
      },
      {
        showBorder: true,
        mode: "light",
        class: "border-b border-b-neutral-200",
      },
    ],
    defaultVariants: {
      showBorder: true,
    },
  }
);

const footer = cva("flex w-full p-3 gap-3 rounded-b-lg bg-drawer-content", {
  variants: {
    position: {
      left: "justify-start",
      right: "justify-end",
    },
    showBorder: {
      true: "border-t",
      false: "",
    },
    mode: {
      dark: "",
      light: "",
    },
  },
  compoundVariants: [
    {
      showBorder: true,
      mode: "dark",
      class: "border-t border-t-neutral-800",
    },
    {
      showBorder: true,
      mode: "light",
      class: "border-t border-t-neutral-200",
    },
  ],
  defaultVariants: {
    position: "left",
    showBorder: true,
  },
});

const floatShared = defineClass(
  "max-[550px]:w-[98%] max-[550px]:rounded-[9px] border-solid max-[550px]:right-1 max-[550px]:left-1 rounded-lg h-[97%]"
);

const stickyShared = defineClass("max-[550px]:w-full max-[550px]:rounded-none");

const panel = cva(
  "flex flex-col fixed w-[450px] transition-all duration-300 ease-in-out max-[1024px]:w-[60%] max-[768px]:w-[80%]",
  {
    variants: {
      mode: {
        light: "bg-white border border-neutral-200",
        dark: "bg-black border-neutral-800",
      },
      isVisible: {
        true: "",
        false: "",
      },
      type: {
        float: "",
        sticky: "",
      },
      position: {
        left: "",
        right: "",
      },
    },
    compoundVariants: [
      {
        type: "float",
        mode: "dark",
        class: "border-[1.33px]",
      },

      {
        isVisible: true,
        position: "left",
        class: "animate-slideInLeft",
      },
      {
        isVisible: false,
        position: "left",
        class: "animate-slideOutLeft",
      },

      {
        isVisible: true,
        position: "right",
        class: "animate-slideIn",
      },
      {
        isVisible: false,
        position: "right",
        class: "animate-slideOut",
      },
      {
        type: "float",
        position: "left",
        class: `${floatShared} top-2 left-3`,
      },
      {
        type: "float",
        position: "right",
        class: `${floatShared} top-2 right-3`,
      },
      {
        type: "sticky",
        position: "left",
        class: `${stickyShared} h-full left-0 top-0 bottom-0 border-r`,
      },
      {
        type: "sticky",
        position: "right",
        class: `${stickyShared} top-0 bottom-0 right-0 h-full border-l`,
      },
    ],
    defaultVariants: {
      type: "sticky",
      position: "right",
    },
  }
);

export { content, header, footer, panel };
export type {
  DrawerContentVariants,
  DrawerFooterVariants,
  DrawerHeaderVariants,
  DrawerPanelVariants,
};
