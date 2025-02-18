import { cva } from "class-variance-authority";
import button_corporate from "./button-corporate";
import button_frost from "./button-frost";
import button_neumorphic from "./button-neumorphic";
import { ButtonVariant, SchemeVariant } from "@/types/auera-system";
import { tw } from "stywind";

type Cls = {
  colorScheme: SchemeVariant;
  variant: ButtonVariant;
  className?: string;
};

const generateButtonClass = ({ colorScheme, variant, className }: Cls) => {
  return cva(
    `flex justify-center items-center shrink-0 font-medium font-inter
    transition-layer duration-300 active:scale-95 gap-2 text-sm`,
    {
      variants: {
        flavour: {
          corporate: tw(
            button_corporate({ colorScheme })({ variant }),
            className
          ),
          frost: tw(button_frost({ colorScheme })({ variant }), className),
          neumorphic: tw(
            button_neumorphic({ colorScheme })({
              variant,
            }),
            className
          ),
        },
        radius: {
          none: "rounded-none",
          sm: "rounded-[4px]",
          md: "rounded-[6px]",
          lg: "rounded-[8px]",
          xl: "rounded-[12px]",
          full: "rounded-full",
        },
        size: {
          xs: "p-[0_10px_0_10px] h-[32px]",
          sm: "p-[0_14px_0_14px] h-[36px]",
          md: "p-[0_16px_0_16px] h-[40px]",
          lg: "p-[0_18px_0_18px] h-[44px]",
          xl: "p-[0_20px_0_20px] h-[48px]",
          "2xl": "p-[0_24px_0_24px] h-[52px]",
        },
        fullWidth: {
          true: "w-full",
          false: "w-auto",
        },
        hidden: {
          true: "hidden",
        },
        disabled: {
          true: "cursor-not-allowed pointer-events-none opacity-75",
        },
      },
      defaultVariants: {
        flavour: "corporate",
        size: "md",
        radius: "md",
        disabled: false,
        hidden: false,
        fullWidth: false,
      },
    }
  );
};

export default generateButtonClass;
