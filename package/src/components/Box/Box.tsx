import { getDisplayName } from "../../utils/displayname";
import { forwardRef } from "react";
import { useProps } from "../../utils";
import { useBox } from "./use-box";
import { BoxProps } from "../../types/auera-ui";

const Box = forwardRef<HTMLDivElement, BoxProps>(
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
      <Base ref={ref as React.LegacyRef<"div">} {...Props}>
        {children}
      </Base>
    );
  }
);

export default Box;

Box.displayName = getDisplayName("Box");
