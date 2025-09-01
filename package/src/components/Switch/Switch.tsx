import React, { useState } from "react";
import { motion } from "motion/react";
import { tw } from "stywind";
import { getDisplayName } from "../../utils/displayname";
import { SwitchProps } from "../../types/auera-ui";
import { checker, switchContainer } from "./switch-variant";

const Switch: React.FC<SwitchProps> = ({
  size = "md",
  color = "blue-600",
  unCheckColor = "gray-300",
  onToggleSwitch,
  disabled,
  on,
  className,
  children,
  variant,
}) => {
  const [isOn, setIsOn] = useState(on ?? false);

  const toggleOn = () => {
    const newState = !isOn;

    if (!disabled) {
      if (onToggleSwitch) {
        onToggleSwitch(newState);
      }

      setIsOn(newState);
    }
  };

  return (
    <div
      aria-disabled={disabled}
      onClick={toggleOn}
      className={tw(
        "flex items-center select-none gap-2 flex-shrink-0 w-fit",
        disabled && "opacity-85",
        className
      )}
    >
      <div
        className={tw(
          switchContainer(
            color,
            unCheckColor
          )({ variant, disabled, size, isOn })
        )}
        data-ison={isOn}
        onClick={toggleOn}
      >
        <motion.div
          className={tw(checker({ variant, size }))}
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
      {children}
    </div>
  );
};

export default Switch;
Switch.displayName = getDisplayName("Switch");
