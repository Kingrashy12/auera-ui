import { cva } from "class-variance-authority";
import button_corporate from "./button-corporate";
import { ButtonVariant, SchemeVariant } from "@/types/auera-system";
import { tw } from "stywind";
import button_neobrutalism from "./button-neobrutalism";

type Cls = {
  colorScheme: SchemeVariant;
  variant: ButtonVariant;
  className?: string;
  as?: string;
};

const generateButtonClass = ({ colorScheme, variant, className, as }: Cls) => {
  return cva(
    `flex justify-center items-center shrink-0 font-medium font-inter
    transition-layer duration-300 gap-2 text-sm relative cursor-pointer`,
    {
      variants: {
        design: {
          corporate: tw(button_corporate({ variant, colorScheme }), className),
          neobrutalism: tw(
            button_neobrutalism({
              variant,
              colorScheme,
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
          true: tw(
            "cursor-not-allowed opacity-75",
            as && as !== "button" && "pointer-events-none"
          ),
        },
      },
      defaultVariants: {
        design: "corporate",
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
