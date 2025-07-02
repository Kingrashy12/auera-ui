import theme from "@/_styles_/theme";
import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";
import { defineClass, tw } from "stywind";

type DrawerContentVariants = VProps<typeof content>;
type DrawerHeaderVariants = VProps<typeof header>;
type DrawerFooterVariants = VProps<typeof footer>;
type DrawerPanelVariants = VProps<typeof panel>;

const content = cva(
  "flex flex-col p-3 bg-drawer-content select-open:scrollbar-none overflow-y-auto h-full m-[5px 0] gap-[16px]",
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
    },
    compoundVariants: [{ showBorder: true, class: theme.__border }],
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
  },
  compoundVariants: [{ showBorder: true, class: theme.__border }],
  defaultVariants: {
    position: "left",
    showBorder: true,
  },
});

const floatShared = defineClass(
  "max-[550px]:w-[98%] max-[550px]:rounded-[9px] border-solid border-1.9 max-[550px]:right-1 max-[550px]:left-1 rounded-lg h-[97%] shadow-[4px_5px_10px]"
);

const stickyShared = defineClass("max-[550px]:w-full max-[550px]:rounded-none");

const panel = cva(
  tw(
    "flex flex-col fixed w-[450px] transition-all duration-300 ease-in-out max-[1024px]:w-[60%] max-[768px]:w-[80%]",
    theme.__content_bg,
    theme.__border,
    theme.__shadow
  ),
  {
    variants: {
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
        class: `${stickyShared} h-full left-0 top-0 bottom-0 border-r-1.9 shadow-[4px_5px_10px]`,
      },
      {
        type: "sticky",
        position: "right",
        class: `${stickyShared} top-0 bottom-0 right-0 h-full border-l-1.9 shadow-[0_4px_10px]`,
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
