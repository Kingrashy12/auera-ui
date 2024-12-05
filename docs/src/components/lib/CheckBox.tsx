import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { createStyle, merge, tw } from "stywind";

type CheckBoxProps = {
  size?: "md" | "lg" | "xl";
  checked: boolean;
  onCheck: () => void;
  radius?: "full" | "default";
  colorScheme?: "primary" | "danger" | "warning" | "success";
};

const CheckBox = ({
  checked,
  onCheck,
  radius = "default",
  size = "md",
  colorScheme = "primary",
}: CheckBoxProps) => {
  const sizeClass = {
    md: "w-6 h-6",
    lg: "w-7 h-7",
    xl: "w-8 h-8",
  };

  const radiusClass = {
    default: "rounded-lg",
    full: "rounded-full",
  };

  const colors = {
    primary: "bg-blue-500 border-blue-500",
    danger: "bg-red-500 border-red-500",
    warning: "bg-yellow-500 border-yellow-500",
    success: "bg-green-500 border-green-500",
  };

  const Check = createStyle("div").classname(
    tw(
      "cursor-pointer flex items-center justify-center border-2 active:scale-90 transition-all duration-300",
      merge.single(radiusClass, radius),
      merge.single(sizeClass, size),
      checked ? merge.single(colors, colorScheme) : "border-gray-400"
    )
  );

  return (
    <Check onClick={onCheck}>
      {checked && <IoCheckmark color="white" size={20} />}
    </Check>
  );
};

export default CheckBox;
// displayname
