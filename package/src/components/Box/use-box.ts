// import { BoxProps } from "@/types/auera-ui";
import { useMemo } from "react";
import { createStyle } from "stywind";
import { tw } from "stywind";
import { motion } from "motion/react";
import { BoxWithMotion } from "@/types/auera-motion";

export const useBox = (props: BoxWithMotion) => {
  const Base = useMemo(() => {
    return createStyle(motion.div).classname(
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
