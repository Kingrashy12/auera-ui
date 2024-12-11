import { BoxProps } from "@/types/auera-ui";
import { useMemo } from "react";
import { createStyle } from "stywind";
import { tw } from "stywind";

export const useBox = (props: BoxProps) => {
  const Base = useMemo(() => {
    return createStyle("div").classname(
      tw(
        "flex relative",
        props.direction === "column" ? "flex-col" : "flex-row",
        props.wrap ? "flex-wrap" : "flex-nowrap",
        props.fullWidth ? "w-full" : "w-auto",
        props.centered && "items-center justify-center",
        props.className
      )
    );
  }, [
    props.direction,
    props.wrap,
    props.fullWidth,
    props.centered,
    props.className,
  ]);

  return { Base };
};
