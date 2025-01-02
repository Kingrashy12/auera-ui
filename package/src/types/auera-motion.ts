import { HTMLMotionProps, MotionProps } from "motion/react";
import { BoxProps, CardProps, StackProps } from "./auera-ui";

export type BoxWithMotion = HTMLMotionProps<"div"> & BoxProps;
export type CardWithMotion = HTMLMotionProps<"div"> & CardProps;
export type StackWithMotion = HTMLMotionProps<"div"> & StackProps;

export type BasicMotionProps = {
  animate?: MotionProps["animate"];
  variants?: MotionProps["variants"];
  initial?: MotionProps["initial"];
  inherit?: MotionProps["inherit"];

  drag?: MotionProps["drag"];
  dragConstraints?: MotionProps["dragConstraints"];
  dragElastic?: MotionProps["dragElastic"];
  dragMomentum?: MotionProps["dragMomentum"];
  dragControls?: MotionProps["dragControls"];
  dragTransition?: MotionProps["dragTransition"];
  dragPropagation?: MotionProps["dragPropagation"];

  whileHover?: MotionProps["whileHover"];
  whileTap?: MotionProps["whileTap"];
  whileDrag?: MotionProps["whileDrag"];
  whileFocus?: MotionProps["whileFocus"];
  whileInView?: MotionProps["whileInView"];

  transition?: MotionProps["transition"];
  layout?: MotionProps["layout"];
  layoutId?: MotionProps["layoutId"];

  onAnimationStart?: MotionProps["onAnimationStart"];
  onAnimationComplete?: MotionProps["onAnimationComplete"];
  onUpdate?: MotionProps["onUpdate"];
  onDragStart?: MotionProps["onDragStart"];
  onDragEnd?: MotionProps["onDragEnd"];
  onDrag?: MotionProps["onDrag"];
  onDirectionLock?: MotionProps["onDirectionLock"];
  onDragTransitionEnd?: MotionProps["onDragTransitionEnd"];
  onHoverStart?: MotionProps["onHoverStart"];
  onHoverEnd?: MotionProps["onHoverEnd"];
  onTapStart?: MotionProps["onTapStart"];
  onTapCancel?: MotionProps["onTapCancel"];
  onTap?: MotionProps["onTap"];
};
