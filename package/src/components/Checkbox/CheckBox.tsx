import { getDisplayName } from "../../utils/displayname";
import { CheckBoxProps } from "../../types/auera-ui";
import Box from "../Box/Box";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { merge, tw } from "stywind";

const CheckBox: React.FC<CheckBoxProps> = ({
  onCheckChange,
  radius = "sm",
  size = "sm",
  colorScheme = "primary",
  color,
  classNames,
  children,
  disabled,
  checked: controlledChecked,
}) => {
  const [checked, setChecked] = useState(controlledChecked ?? false);

  const sizeClass = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-6 h-6",
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

  const handleCheck = () => {
    const newState = !checked;

    if (!disabled) {
      if (onCheckChange) {
        onCheckChange(newState);
      }

      setChecked(newState);
    }
  };

  return (
    <Box
      className={tw(
        "gap-2 items-center w-fit shrink-0",
        { "cursor-not-allowed opacity-85 select-none": disabled },
        classNames?.container
      )}
      onClick={handleCheck}
    >
      <div
        className={tw(
          "flex items-center flex-shrink-0 justify-center border-2 active:scale-90 transition-all duration-300",
          disabled
            ? "cursor-not-allowed pointer-events-none"
            : "cursor-pointer",
          merge.single(radiusClass, radius),
          merge.single(sizeClass, size),
          checked ? getColorString() : "border-gray-400",
          { "border-neutral-400": disabled },
          classNames?.checker
        )}
      >
        {checked && <BsCheckLg color="white" size={20} />}
      </div>
      <>{children}</>
    </Box>
  );
};

export default CheckBox;
CheckBox.displayName = getDisplayName("CheckBox");
