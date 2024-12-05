import React from "react";
import { merge, tw } from "stywind";

type BadgeProps = {
  colorScheme?: "primary" | "danger" | "warning" | "success";
  show: boolean;
  text: string;
  fadeOut?: boolean;
};

const Badge = ({
  colorScheme = "primary",
  show,
  fadeOut,
  text,
}: BadgeProps) => {
  const badgeColors = {
    primary: "bg-blue-200 border-blue-500 text-blue-500",
    danger: "bg-redd-200 border-red-500 text-red-500",
    warning: "bg-yellow-200 border-yellow-500 text-yellow-500",
    success: "bg-green-200 border-green-500 text-green-500",
  };
  return (
    <div
      className={tw(
        "border-none font-inter-tight items-center p-[6px] rounded-lg h-6 w-auto flex-shrink-0 font-medium text-xs",
        merge.single(badgeColors, colorScheme),
        show ? "flex" : "hidden",
        fadeOut ? "opacity-75" : ""
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
