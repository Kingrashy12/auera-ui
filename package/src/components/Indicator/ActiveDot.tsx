import { getDisplayName } from "@/utils/displayname";
import { ColorPair } from "../../types/auera-system";
import React from "react";
import { tw } from "@/utils";

type DotProps = {
  isActive: boolean;
  onClick: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  activeColor?: ColorPair;
  inActiveColor?: ColorPair;
};

const ActiveDot: React.FC<DotProps> = ({
  isActive,
  onClick,
  size = "md",
  activeColor = "black",
  inActiveColor = "gray-300",
}) => {
  return (
    <div
      className={tw(
        {
          "w-2 h-2": size === "sm",
          "w-3 h-3": size === "md",
          "w-4 h-4": size === "lg",
          "w-5 h-5": size === "xl",
        },
        "rounded-full cursor-pointer",
        isActive ? `bg-${activeColor}` : `bg-${inActiveColor}`
      )}
      onClick={onClick}
    />
  );
};

export default ActiveDot;

ActiveDot.displayName = getDisplayName("ActiveDot");
