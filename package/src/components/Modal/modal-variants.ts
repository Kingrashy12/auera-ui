import neobrutalism from "@/_styles_/neobrutalism";
import theme from "@/_styles_/theme";
import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";
import { tw } from "stywind";

type FooterVariants = VProps<typeof footer>;
type PanelVariants = VProps<typeof panel>;
type HeaderVariants = VProps<typeof header>;

const footer = cva("flex w-full p-3 gap-3", {
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

const header = cva("flex items-center justify-between p-[13px] w-full", {
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
});

const panel = cva(
  tw(
    "max-w-full max-h-[95%] h-auto flex relative z-[800] overflow-hidden border",
    theme.__content_bg,
    theme.__border,
    theme.__shadow
  ),
  {
    variants: {
      align: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },

      design: {
        neobrutalism: neobrutalism.__MODAL_PANEL,
        frost: "",
        corporate:
          "shadow-[0_4px_10px_rgba(0,0,0,0.1)] tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]",
      },
      size: {
        auto: "w-auto max-w-[95%]",
        sm: "w-[400px] max-w-[95%]",
        md: "w-[500px] max-w-[95%]",
        lg: "w-[600px] max-w-[95%]",
        xl: "w-[700px] max-[720px]:w-[90%] max-[550px]:w-[95%] max-w-[95%]",
        full: "w-10/12 max-[720px]:w-[95%]",
        "full-screen":
          "w-full h-full absolute inset-0 max-h-full !rounded-none",
      },
      placement: {
        top: "top-5 self-start",
        bottom: "bottom-5 self-end",
        center: "self-center",
      },
      radius: {
        md: "rounded-[12px]",
        lg: "rounded-[15px]",
        xl: "rounded-[19px]",
        "2xl": "rounded-[23px]",
        "3xl": "rounded-[27px]",
      },
      transition: {
        slideIn: "",
        walkIn: "",
        dropIn: "",
      },
      isVisible: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        isVisible: true,
        transition: "slideIn",
        class: "animate-slideIn",
      },
      {
        isVisible: false,
        transition: "slideIn",
        class: "animate-slideOut",
      },
      {
        isVisible: true,
        transition: "walkIn",
        class: "animate-walkIn",
      },
      {
        isVisible: false,
        transition: "walkIn",
        class: "animate-walkOut",
      },
      {
        isVisible: true,
        transition: "dropIn",
        class: "animate-dropIn",
      },
      {
        isVisible: false,
        transition: "dropIn",
        class: "animate-dropOut",
      },
    ],
    defaultVariants: {
      size: "auto",
      transition: "walkIn",
      align: "vertical",
      radius: "md",
      placement: "center",
    },
  }
);

export { footer, panel, header };
export type { FooterVariants, PanelVariants, HeaderVariants };
