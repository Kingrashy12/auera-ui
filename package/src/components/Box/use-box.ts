import { useMemo } from "react";
import { createStyle } from "stywind";
import { motion } from "motion/react";
import { BoxWithMotion } from "@/types/auera-motion";
import box from "./box_variants";

export const useBox = (props: BoxWithMotion) => {
  const { direction, fullWidth, wrap, centered, hidden, between, className } =
    props;
  const Base = useMemo(
    () =>
      createStyle(motion.div).classname(
        box({
          direction,
          fullWidth,
          className,
          centered,
          between,
          wrap,
          hidden,
        })
      ),
    [
      props.direction,
      props.wrap,
      props.fullWidth,
      props.centered,
      props.className,
      props.between,
    ]
  );

  return { Base };
};

// tw(
//   "flex relative",
//   props.direction === "column" ? "flex-col" : "flex-row",
//   props.wrap ? "flex-wrap" : "flex-nowrap",
//   props.fullWidth ? "w-full" : "w-auto",
//   props.centered && "items-center justify-center",
//   props.hidden && "hidden",
//   props.between && "justify-between",
//   props.className
// )
