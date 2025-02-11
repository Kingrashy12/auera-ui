import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { BoxWithMotion, MotionDivRef } from "../../types/auera-motion";
import { useProps } from "../../utils";
import { useBox } from "./use-box";

const Box = forwardRef<HTMLDivElement, BoxWithMotion>(
  ({ children, ...props }, ref) => {
    const { Base } = useBox(props);
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
