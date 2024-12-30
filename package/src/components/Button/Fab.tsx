import { FabProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { tw } from "stywind";

const fabPosition = {
  left: "left-6 bottom-6",
  right: "right-6 bottom-6",
};

const colorScheme = {
  primary: "bg-purple-500 text-white hover:bg-purple-600",
  bold: "bg-black text-white hover:bg-gray-800",
  soft: "bg-white text-black hover:bg-gray-100",
};

const fabSize = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
};

const zIndx = {
  100: "z-[100]",
  200: "z-[200]",
  300: "z-[300]",
  400: "z-[400]",
  500: "z-[500]",
  600: "z-[600]",
};

const Fab: React.FC<FabProps> = ({
  type = "fixed",
  color = "primary",
  position = "left",
  size = "md",
  disabled,
  zIndex = "100",
  className,
  ...props
}) => {
  return (
    <div
      className={tw(
        className,
        colorScheme[color],
        fabPosition[position],
        fabSize[size],
        zIndx[zIndex],
        {
          fixed: type === "fixed",
          relative: type === "relative",
          absolute: type === "absolute",
          sticky: type === "sticky",
          static: type === "static",
        },
        "flex items-center justify-center cursor-pointer rounded-full shadow transition-all duration-300 active:scale-95",
        disabled && "pointer-events-none opacity-75 cursor-not-allowed"
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Fab;

Fab.displayName = getDisplayName("Fab");
