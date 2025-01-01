import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { useBox } from "./use-box";
import { BoxWithMotion } from "../../types/auera-motion";
import { useProps } from "@/utils";

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
