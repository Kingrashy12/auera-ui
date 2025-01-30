import { cva } from "class-variance-authority";
import React from "react";

interface DividerProps {
  type?: "height" | "bottom";
  className?: string;
  mode?: "dark" | "light";
}

const divider = cva("bg-neutral-200 tone-dark:bg-neutral-800", {
  variants: {
    type: {
      bottom: "w-full h-[1px]",
      height: "w-[1px] h-auto",
    },
  },
});

const Divider: React.FC<DividerProps> = ({
  type = "bottom",
  className,
  mode,
}) => {
  return <div data-theme={mode} className={divider({ type, className })} />;
};

export default Divider;
