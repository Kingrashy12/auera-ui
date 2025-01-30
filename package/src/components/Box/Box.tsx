import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { BoxWithMotion } from "../../types/auera-motion";
import { useProps } from "../../utils";
// import { motion } from "motion/react";
import { useBox } from "./use-box";

const Box = forwardRef<HTMLDivElement, BoxWithMotion>(
  ({ children, ...props }, ref) => {
    const { Base } = useBox(props);
    const Props = useProps(props, "div");
    return (
      <Base ref={ref} {...Props}>
        {children}
      </Base>
    );
  }
);

export default Box;

Box.displayName = getDisplayName("Box");

// const cls = tw(
// props.className,
// "flex relative",
// props.direction === "column" ? "flex-col" : "flex-row",
// props.wrap ? "flex-wrap" : "flex-nowrap",
// props.fullWidth ? "w-full" : "w-auto",
// {
//   "items-center justify-center": props.centered,
//   "justify-between": props.between,
//   hidden: props.hidden,
// }
// );
