import { cva, VariantProps } from "class-variance-authority";
import { useMemo } from "react";
import { createStyle, tw } from "stywind";

const drop = cva("w-full fixed h-full inset-0", {
  variants: {
    mode: {
      dark: "bg-dark-drop",
      light: "bg-light-drop",
    },
    intensity: {
      none: "backdrop-blur-0",
      sm: "backdrop-blur-[4px]",
      md: "backdrop-blur-[6px]",
      lg: "backdrop-blur-[8px]",
      xl: "backdrop-blur-[10px]",
      "2xl": "backdrop-blur-[12px]",
      "3xl": "backdrop-blur-[14px]",
    },
    open: {
      true: "flex",
      false: "hidden",
    },
    centerContent: {
      true: "items-center justify-center",
    },
    zIndex: {
      "80": "z-[80]",
      "100": "z-[100]",
      "150": "z-[150]",
      "200": "z-[200]",
      "250": "z-[250]",
      "300": "z-[300]",
      "350": "z-[350]",
      "400": "z-[400]",
      "450": "z-[450]",
      "500": "z-[500]",
      "550": "z-[550]",
      "600": "z-[600]",
      "650": "z-[650]",
      "700": "z-[700]",
      "750": "z-[750]",
      "800": "z-[800]",
      "850": "z-[850]",
      "900": "z-[900]",
      "950": "z-[950]",
      "1000": "z-[1000]",
    },
  },
  defaultVariants: {
    zIndex: "500",
    open: false,
  },
});

type DropVariant = VariantProps<typeof drop>;

const useDrop = (props: DropVariant & { className?: string }) => {
  const { zIndex, centerContent, intensity, mode, open, className } = props;

  const Drop = useMemo(
    () =>
      createStyle("div").classname(
        tw(drop({ intensity, centerContent, mode, open, zIndex }), className)
      ),
    [zIndex, centerContent, intensity, mode, open, className]
  );

  return Drop;
};

export default useDrop;
