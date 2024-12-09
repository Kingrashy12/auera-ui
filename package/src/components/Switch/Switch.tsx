import { SwitchProps } from "../../types/auera-ui";
import { createStyle, merge, tw } from "stywind";

const Switch = ({
  checked,
  onToggle,
  size = "sm",
  colorScheme = "primary",
  unCheckColor,
  color,
}: SwitchProps) => {
  const sizeClass = {
    sm: "w-9 h-[21px]",
    md: "w-11 h-6",
    lg: "w-14 h-8",
    xl: "w-[66px] h-9",
  };

  const handleSize = {
    sm: "w-[14.5px] h-[14.5px]",
    md: "w-4 h-4",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const colors = {
    primary: "bg-blue-500",
    danger: "bg-red-500",
    warning: "bg-yellow-500",
    success: "bg-green-500",
  };

  const Toggle = createStyle("div").classname(
    tw(
      "relative cursor-pointer transition-layer items-center flex duration-700 ease-in-out rounded-full",
      merge.single(sizeClass, size),
      checked
        ? color
          ? `bg-${color}`
          : merge.single(colors, colorScheme)
        : unCheckColor
          ? `bg-${unCheckColor}`
          : "bg-gray-300"
    )
  );
  const Handle = createStyle("div").classname(
    tw(
      "absolute bg-white rounded-full shadow-md transform transition-transform duration-700 ease-in-out",
      merge.single(handleSize, size),
      checked ? "right-1" : "left-1"
    )
  );

  return (
    <Toggle onClick={onToggle}>
      <Handle />
    </Toggle>
  );
};

export default Switch;
// displayname
