import { createStyle, defineClass, merge, tw } from "stywind";
import { IconButtonProps } from "../../types/auera-ui";
import { useTheme } from "../../hook/useTheme";
import { getDisplayName } from "@/utils/displayname";
import { FC } from "react";

const IconButton: FC<IconButtonProps> = ({
  children,
  variants = "subtle",
  radius = "lg",
  size = "lg",
  ...props
}) => {
  const { mode } = useTheme();
  const sizes = {
    md: "p-1",
    lg: "p-2",
    xl: "p-3",
  };
  const rounded = {
    md: "rounded-sm",
    lg: "rounded-md",
    xl: "rounded-lg",
    full: "rounded-full",
  };

  const modeVariant = {
    light: {
      outline: defineClass(
        "border-[1.3px] border-neutral-200 hover:bg-gray-100"
      ),
      subtle: defineClass(
        "bg-gray-50 hover:bg-gray-100 border-none outline-none"
      ),
      ghost: defineClass(
        "bg-transparent hover:bg-gray-100 border-none outline-none"
      ),
    },
    dark: {
      outline: defineClass(
        "border-[1.36px] border-neutral-800 hover:bg-neutral-900 text-white"
      ),
      subtle: defineClass(
        "bg-neutral-700 hover:bg-neutral-800 border-none outline-none text-white"
      ),
      ghost: defineClass(
        "bg-transparent hover:bg-neutral-800 border-none outline-none text-white"
      ),
    },
  };

  const Button = createStyle("button").classname(
    tw(
      "cursor-pointer active:scale-95 flex items-center justify-center",
      merge.single(sizes, size),
      merge.single(rounded, radius),
      merge.multi(modeVariant, mode, variants)
    )
  );
  return <Button {...props}>{children}</Button>;
};

export default IconButton;
IconButton.displayName = getDisplayName("IconButton");
