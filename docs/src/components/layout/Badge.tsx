import React from "react";
import { defineClass, merge, tw } from "stywind";

type BadgeProps = {
  colorScheme?: "primary" | "danger" | "warning" | "success";
  show: boolean;
  children: React.ReactNode;
  fadeOut?: boolean;
  className?: string;
};

const Badge = ({
  colorScheme = "primary",
  show,
  fadeOut,
  children,
  className,
}: BadgeProps) => {
  const badgeColors = {
    primary: defineClass(
      "bg-blue-100 border-blue-300 text-blue-500 data-[theme='dark']:bg-dark-soft-blue"
    ),
    danger: "bg-redd-200 border-red-500 text-red-500",
    warning: "bg-yellow-200 border-yellow-500 text-yellow-500",
    success: "bg-green-200 border-green-500 text-green-500",
  };
  return (
    <div
      className={tw(
        className,
        "border font-inter-tight items-center p-2 rounded-lg h-6 w-auto flex-shrink-0 font-medium text-xs",
        merge.single(badgeColors, colorScheme),
        show ? "flex" : "hidden",
        fadeOut ? "opacity-75" : ""
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
