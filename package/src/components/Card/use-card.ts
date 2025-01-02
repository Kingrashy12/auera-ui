import { useMemo } from "react";
import { CardProps } from "../../types/auera-ui";
import { createStyle, tw } from "stywind";
import { motion } from "motion/react";

export const useCard = (props: CardProps) => {
  const Base = useMemo(() => {
    return createStyle(motion.div).classname(
      tw(
        props.className,
        "rounded-[10px] flex p-[20px] gap-[16px] card",
        props.centerContent ? "items-center justify-center" : "",
        props.fullWidth ? "w-full w-auto" : "",
        props.direction === "row" ? "flex-row" : "flex-col"
      )
    );
  }, [props.direction, props.className, props.centerContent, props.fullWidth]);

  return { Base };
};
