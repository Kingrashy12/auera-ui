import React, { useState } from "react";
import { motion } from "motion/react";
import { tw } from "stywind";
import { getDisplayName } from "../../utils/displayname";
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
  onToggleSwitch,
  disabled,
}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleOn = () => {
    setIsOn((prev) => {
      const newState = !prev;
      if (onToggleSwitch) {
        onToggleSwitch(newState);
      }
      return newState;
    });
  };

  return (
    <div
      className={tw(
        "flex cursor-pointer p-1 rounded-full data-[ison=true]:justify-end items-center transition-transform",
        sizeClass[size],
        isOn ? `bg-${color}` : `bg-${unCheckColor}`,
        {
          "cursor-not-allowed pointer-events-none opacity-85 bg-gray-300":
            disabled,
        }
      )}
      data-ison={isOn}
      onClick={toggleOn}
    >
      <motion.div
        className={tw("bg-white rounded-full", handleSize[size])}
        layout
        transition={{
          type: "spring",
          bounce: 0.5,
          visualDuration: 0.5,
          damping: 30,
          stiffness: 500,
        }}
      />
    </div>
  );
};

export default Switch;
Switch.displayName = getDisplayName("Switch");
