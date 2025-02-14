import { useMemo } from "react";
import { createStyle } from "stywind";
import { motion } from "motion/react";
import { BoxWithMotion } from "@/types/auera-motion";
import box from "./box_variants";
import { tw } from "@/utils";

export const useBox = (props: BoxWithMotion) => {
  const { direction, fullWidth, wrap, centered, hidden, between, className } =
    props;

  const Base = useMemo(
    () =>
      createStyle(motion.div).classname(
        tw(
          box({
            direction,
            fullWidth,
            centered,
            between,
            wrap,
            hidden,
          }),
          className
        )
      ),
    [
      props.direction,
      props.wrap,
      props.fullWidth,
      props.centered,
      props.className,
      props.between,
      props.hidden,
    ]
  );

  return { Base };
};
