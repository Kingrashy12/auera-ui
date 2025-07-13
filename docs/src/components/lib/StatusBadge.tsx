import React from "react";
import { createStyle, defineClass, merge, tw } from "stywind";

type StatusBadgeProps = {
  /**
   * The status of the badge, one of 'online', 'offline', 'away', or 'busy'.
   * @default 'online'
   */
  status?: "online" | "offline" | "away" | "busy";
  /**
   * The size of the badge, one of 'sm', 'md', or 'lg'.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional className to be applied to the badge container.
   */
  className?: string;
  /**
   * Optional children to be rendered inside the badge.
   */
  children?: React.ReactNode;
  /**
   * Optional custom class to be applied to the badge.
   */
  badgeClassName?: string;
  placement?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
  animate?: boolean;
};

const statusBadgeColorScheme = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  away: "bg-yellow-500",
  busy: "bg-red-500",
};

const statusBadgeSize = {
  sm: "w-[8px] h-[8px]",
  md: "w-[12px] h-[12px]",
  lg: "w-[16px] h-[16px]",
};

const StatusBadge = ({
  status = "online",
  size = "md",
  className,
  children,
  badgeClassName,
  placement = "left-top",
  animate,
}: StatusBadgeProps) => {
  const basicClass = defineClass(
    "absolute block border-white border-[1.5px] rounded-full"
  );
  const position = {
    "left-top": defineClass("top-0 left-0"),
    "left-bottom": defineClass("bottom-0 left-0"),
    "right-top": defineClass("right-0 top-0"),
    "right-bottom": defineClass("right-0 bottom-0"),
  };
  const Badge = createStyle("div").classname(
    "relative w-auto flex shrink-0"
  );
  const BadgeStatus = createStyle("div").classname(
    tw(
      basicClass,
      merge.single(statusBadgeSize, size),
      merge.single(statusBadgeColorScheme, status),
      merge.single(position, placement),
      badgeClassName as string,
      animate ? "animate-pulse" : ""
    )
  );

  return (
    <Badge className={className}>
      <BadgeStatus />
      {children}
    </Badge>
  );
};

export default StatusBadge;
