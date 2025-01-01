import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { useBox } from "./use-box";
import { BoxWithMotion } from "../../types/auera-motion";

const Box = forwardRef<HTMLDivElement, BoxWithMotion>(
  ({ children, ...props }, ref) => {
    const { Base } = useBox(props);
    return (
      <Base ref={ref} {...props}>
        {children}
      </Base>
    );
  }
);

export default Box;

Box.displayName = getDisplayName("Box");
