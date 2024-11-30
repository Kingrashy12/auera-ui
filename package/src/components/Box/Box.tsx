import { createStyle, tw } from "stywind";
import { BoxProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";

const Box = ({ children, direction = "row", wrap, ...props }: BoxProps) => {
  const FlexBox = createStyle<"div", BoxProps>("div").classname(
    tw(
      "flex relative",
      direction === "row" ? "flex-row" : "flex-col",
      wrap ? "flex-wrap" : "flex-nowrap",
      props.fullWidth ? "w-full" : "w-auto",
      props.centered ? "items-center justify-center" : ""
    )
  );
  return (
    <FlexBox direction={direction} wrap={wrap} {...props}>
      {children}
    </FlexBox>
  );
};

export default Box;

Box.displayName = getDisplayName("Box");
