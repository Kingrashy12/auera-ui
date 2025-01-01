import { HTMLMotionProps } from "motion/react";
import { BoxProps, CardProps, StackProps } from "./auera-ui";

export type BoxWithMotion = HTMLMotionProps<"div"> & BoxProps;
export type CardWithMotion = HTMLMotionProps<"div"> & CardProps;
export type StackWithMotion = HTMLMotionProps<"div"> & StackProps;
