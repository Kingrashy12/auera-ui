import { BoxProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { useBox } from "./use-box";

const Box = forwardRef<HTMLDivElement, BoxProps>(
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
