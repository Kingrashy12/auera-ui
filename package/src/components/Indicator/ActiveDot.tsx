import { ColorPair } from "../../types/auera-system";
import React from "react";
import { tw } from "stywind";

type DotProps = {
  isActive: boolean;
  onClick: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  color?: ColorPair | "black" | "white";
};

const ActiveDot: React.FC<DotProps> = ({
  isActive,
  onClick,
  size = "md",
  color = "purple-500",
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
        isActive ? `bg-${color}` : "bg-gray-300"
      )}
      onClick={onClick}
    />
  );
};

export default ActiveDot;
