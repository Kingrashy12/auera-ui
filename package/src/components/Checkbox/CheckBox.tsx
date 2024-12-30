import { getDisplayName } from "@/utils/displayname";
import { CheckBoxProps } from "../../types/auera-ui";
import { IoCheckmark } from "react-icons/io5";
import { createStyle, merge, tw } from "stywind";

const CheckBox = ({
  checked,
  onCheck,
  radius = "sm",
  size = "sm",
  colorScheme = "primary",
  color,
  className,
}: CheckBoxProps) => {
  const sizeClass = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
    xl: "w-8 h-8",
  };

  const radiusClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    full: "rounded-full",
  };

  const colors = {
    primary: "blue-500",
    danger: "red-500",
    warning: "yellow-500",
    success: "green-500",
  };

  const getColorString = () => {
    if (color) {
      return `bg-${color} border-${color}`;
    } else {
      const colorStr = merge.single(colors, colorScheme);
      return `bg-${colorStr} border-${colorStr}`;
    }
  };

  const Check = createStyle("div").classname(
    tw(
      className,
      "cursor-pointer flex items-center justify-center border-2 active:scale-90 transition-all duration-300",
      merge.single(radiusClass, radius),
      merge.single(sizeClass, size),
      checked ? getColorString() : "border-gray-400"
    )
  );

  return (
    <Check onClick={onCheck}>
      {checked && <IoCheckmark color="white" size={20} />}
    </Check>
  );
};

export default CheckBox;
CheckBox.displayName = getDisplayName("CheckBox");
