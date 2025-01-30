import { FabProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { zIndexKeys } from "@/utils/keys";
import React from "react";
import { tw } from "stywind";

const fabPosition = {
  left: "left-6 bottom-6",
  right: "right-6 bottom-6",
};

const colorScheme = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  bold: "bg-black text-white hover:bg-gray-800",
  soft: "bg-white text-black hover:bg-gray-100",
};

const fabSize = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
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
        zIndexKeys[zIndex],
        {
          fixed: type === "fixed",
          relative: type === "relative",
          absolute: type === "absolute",
          sticky: type === "sticky",
          static: type === "static",
        },
        "flex items-center justify-center animate-walkIn cursor-pointer rounded-full shadow transition-all duration-300 active:scale-95",
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
