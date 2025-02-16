import { useMode } from "@/hook/use";
import { cva } from "class-variance-authority";
import React from "react";
import { tw } from "stywind";

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
  defaultVariants: {
    type: "bottom",
  },
});

const Divider: React.FC<DividerProps> = ({
  type = "bottom",
  className,
  mode,
}) => {
  const { currentMode } = useMode(mode);

  return (
    <div
      data-theme={currentMode}
      className={tw(divider({ type }), className)}
    />
  );
};

export default Divider;
