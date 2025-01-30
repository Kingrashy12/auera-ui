import { getDisplayName } from "@/utils/displayname";
import { StatusBadgeProps } from "../../types/auera-ui";
import { defineClass, merge, tw } from "@/utils";

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

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status = "online",
  size = "md",
  className,
  children,
  badgeClassName,
  placement = "left-top",
  animate,
}) => {
  const basicClass = defineClass(
    "absolute block border-white border-[1.5px] rounded-full"
  );
  const position = {
    "left-top": defineClass("top-0 left-0"),
    "left-bottom": defineClass("bottom-0 left-0"),
    "right-top": defineClass("right-0 top-0"),
    "right-bottom": defineClass("right-0 bottom-0"),
  };

  return (
    <div className={tw("relative w-auto flex flex-shrink-0", className)}>
      <div
        className={tw(
          basicClass,
          merge.single(statusBadgeSize, size),
          merge.single(statusBadgeColorScheme, status),
          merge.single(position, placement),
          badgeClassName as string,
          animate ? "animate-pulse" : ""
        )}
      />
      {children}
    </div>
  );
};

export default StatusBadge;
StatusBadge.displayName = getDisplayName("StatusBadge");
