import { generateButtonClass } from "@/flavours/corporate/button/button.class";
import { generateFrostButton } from "@/flavours/frost/button/button.class";
import { generateNeumorphicButton } from "@/flavours/neumorphic/button/button.class";
import { useProvider, useTheme } from "@/hook";
import { ButtonProps } from "@/types/auera-ui";
import { createStyle, defineClass, merge, tw } from "stywind";

const rd = {
  none: defineClass("rounded-none"),
  sm: defineClass("rounded-[4px]"),
  md: defineClass("rounded-[6px]"),
  lg: defineClass("rounded-[8px]"),
  xl: defineClass("rounded-[12px]"),
  full: defineClass("rounded-full"),
};

const sz = {
  xs: defineClass("p-[0_10px_0_10px] h-[32px]"),
  sm: defineClass("p-[0_14px_0_14px] h-[36px]"),
  md: defineClass("p-[0_16px_0_16px] h-[40px]"),
  lg: defineClass("p-[0_18px_0_18px] h-[44px]"),
  xl: defineClass("p-[0_20px_0_20px] h-[48px]"),
};

const useButton = ({
  radius = "sm",
  variant = "solid",
  size = "md",
  colorScheme = "primary",
  flavour,
  ...props
}: ButtonProps) => {
  const { flavour: Flavour } = useProvider();
  const { mode: AppMode } = useTheme();

  const mainClass = defineClass(
    "flex justify-center items-center flex-shrink-0 font-medium transition-layer duration-200 active:scale-95 gap-2"
  );
  const currentMode = props.mode ?? AppMode;
  const disabled = props.isLoading || props.disabled;
  const borderRadius = merge.single(rd, radius);
  const buttonSize = merge.single(sz, size);
  const bg_corp = generateButtonClass({ variant, colorScheme });
  const frostFlavour = generateFrostButton({
    variant,
    colorScheme,
    mode: currentMode,
  });
  const neumorphic_flavour = generateNeumorphicButton({
    variant,
    colorScheme,
    mode: currentMode,
  });
  const buttonStyle = {
    frost: frostFlavour,
    corporate: bg_corp,
    neumorphic: tw(neumorphic_flavour, "active:scale-70"),
  };

  const Component = createStyle("button").classname(
    tw(
      merge.single(buttonStyle, flavour ?? Flavour),
      borderRadius,
      buttonSize,
      mainClass,
      props.fullWidth ? "w-full" : "w-auto",
      disabled && "cursor-not-allowed pointer-events-none opacity-75"
    )
  );

  return { Component };
};

export { useButton };
