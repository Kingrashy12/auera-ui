import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { BoxWithMotion, MotionDivRef } from "../../types/auera-motion";
import { useProps } from "../../utils";
import { useBox } from "./use-box";

const Box = forwardRef<HTMLDivElement, BoxWithMotion>(
  ({ children, ...props }, ref) => {
    const { Base } = useBox({
      direction: props.direction,
      fullWidth: props.fullWidth,
      wrap: props.wrap,
      centered: props.centered,
      hidden: props.hidden,
      between: props.between,
      className: props.className,
    });

    const Props = useProps(props, "div");
    return (
      <Base ref={ref as MotionDivRef} {...Props}>
        {children}
      </Base>
    );
  }
);

export default Box;

Box.displayName = getDisplayName("Box");
