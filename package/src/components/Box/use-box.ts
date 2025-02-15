import { useMemo } from "react";
import { createStyle, tw } from "stywind";
import { motion } from "motion/react";
import box, { BoxVariants } from "./box_variants";

export const useBox = (props: BoxVariants) => {
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
    [direction, wrap, fullWidth, centered, className, between, hidden]
  );

  return { Base };
};
