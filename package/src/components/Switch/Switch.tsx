import React from "react";
import { motion } from "motion/react";
import { tw } from "stywind";
import { getDisplayName } from "@/utils/displayname";
import { SwitchProps } from "../../types/auera-ui";

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

const Switch: React.FC<SwitchProps> = ({
  size = "md",
  color = "blue-500",
  unCheckColor = "gray-300",
  isOn,
  toggleOn,
}) => {
  return (
    <div
      className={tw(
        "switch",
        sizeClass[size],
        isOn ? `bg-${color}` : `bg-${unCheckColor}`
      )}
      data-ison={isOn}
      onClick={toggleOn}
    >
      <motion.div
        className={tw("bg-white rounded-full", handleSize[size])}
        layout
        transition={spring}
      />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Switch;
Switch.displayName = getDisplayName("Switch");
