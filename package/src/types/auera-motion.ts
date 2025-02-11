import {
  ForwardRefComponent,
  HTMLMotionProps,
  MotionProps,
} from "motion/react";
import { BoxProps, CardProps, MediaProps, StackProps } from "./auera-ui";
import { ForwardRefExoticComponent, LegacyRef, RefAttributes } from "react";
import { AueraElementPropsWithMotion } from "./auera-system";

export type BoxWithMotion = HTMLMotionProps<"div"> & BoxProps;
export type CardWithMotion = HTMLMotionProps<"div"> & CardProps;
export type StackWithMotion = HTMLMotionProps<"div"> & StackProps;
export type ImageWithMotion = HTMLMotionProps<"img"> & MediaProps;
export type TabPanelWithMotion = HTMLMotionProps<"div"> & {
  animatePanel?: boolean;
};

export type AueraMotionDivRef = LegacyRef<
  ForwardRefExoticComponent<
    Omit<AueraElementPropsWithMotion<"div">, "ref"> &
      RefAttributes<HTMLDivElement>
  >
>;

export type MotionDivRef = LegacyRef<
  ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>
>;

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
