import { VProps } from "@/types/auera-system";
import { cva } from "class-variance-authority";

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

const header = cva("flex items-center justify-between p-[13px] w-full", {
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
});

const panel = cva(
  "max-w-full max-h-[95%] h-auto flex relative z-[800] overflow-hidden gap-[10px]",
  {
    variants: {
      align: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },
      mode: {
        light: "border border-neutral-200 bg-white",
        dark: "border border-neutral-800 bg-black",
      },
      flavour: {
        neumorphic: "",
        frost: "",
        corporate: "",
      },
      size: {
        auto: "w-auto max-[550px]:w-[95%]",
        sm: "w-[300px] max-[550px]:w-[95%]",
        md: "w-[400px] max-[550px]:w-[95%]",
        lg: "w-[500px] max-[550px]:w-[95%]",
        xl: "w-[600px] max-[550px]:w-[95%]",
        full: "w-10/12 max-[550px]:w-[95%]",
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
      {
        mode: "light",
        flavour: "neumorphic",
        class: "shadow-neumorphic-outline",
      },
      {
        mode: "dark",
        flavour: "neumorphic",
        class: "shadow-neumorphic-modal-dark",
      },
      {
        mode: "light",
        flavour: "frost",
        class: "shadow-frost-outline",
      },
      {
        mode: "dark",
        flavour: "frost",
        class: "shadow-frost-modal-dark",
      },
      {
        mode: "light",
        flavour: "corporate",
        class: "shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
      },
      {
        mode: "dark",
        flavour: "corporate",
        class: "shadow-[0_4px_8px_rgba(255,255,255,0.05)]",
      },
    ],
    defaultVariants: {
      size: "auto",
      transition: "walkIn",
      align: "vertical",
      radius: "md",
    },
  }
);

export { footer, panel, header };
export type { FooterVariants, PanelVariants, HeaderVariants };
