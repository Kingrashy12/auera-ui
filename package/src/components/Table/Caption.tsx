import { useTable } from "@/context/table";
import React from "react";
import { CaptionProps, tw } from "stywind";

const Caption: React.FC<CaptionProps> = ({ className, children, ...props }) => {
  const { mode } = useTable();

  return (
    <caption
      data-theme={mode}
      className={tw(
        "py-2 text-start font-inter text-sm text-gray-600 tone-dark:text-neutral-500",
        className
      )}
      {...props}
    >
      {children}
    </caption>
  );
};

export default Caption;
Caption.displayName = "AueraUI.Caption";
