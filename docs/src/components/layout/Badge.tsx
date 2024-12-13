import React from "react";
import { defineClass, merge, tw } from "stywind";

type BadgeProps = {
  colorScheme?: "primary" | "danger" | "warning" | "success";
  show: boolean;
  children: React.ReactNode;
  fadeOut?: boolean;
  className?: string;
  variant?: "ghost" | "solid";
};

const Badge = ({
  colorScheme = "primary",
  show,
  fadeOut,
  children,
  className,
  variant = "solid",
}: BadgeProps) => {
  const badgeColors = {
    solid: {
      primary: defineClass(
        "bg-blue-100 border-blue-300 text-blue-500 data-[theme='dark']:bg-dark-soft-blue"
      ),
      danger: "bg-red-200 border-red-500 text-red-500",
      warning: "bg-yellow-200 border-yellow-500 text-yellow-500",
      success: "bg-green-200 border-green-500 text-green-500",
    },
    ghost: {
      primary: "text-blue-500",
      danger: "text-red-500",
      warning: "text-yellow-500",
      success: "text-green-500",
    },
  };

  return (
    <div
      className={tw(
        className,
        "font-inter-tight items-center p-2 rounded-lg h-6 w-auto flex-shrink-0 font-medium text-xs",
        merge.multi(badgeColors, variant, colorScheme),
        show ? "flex" : "hidden",
        fadeOut && "opacity-75",
        variant === "solid" ? "border" : "border-none"
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
