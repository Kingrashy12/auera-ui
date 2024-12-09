import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { CardProps } from "../../types/auera-ui";
import { createStyle, tw } from "stywind";

/** Card component for displaying content in a styled container.*/
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, mode, direction = "column", ...props }, ref) => {
    const StyledCard = createStyle("div").classname(
      tw(
        "rounded-[10px] flex p-[20px] gap-[16px] card",
        props.centerContent ? "items-center justify-center" : "",
        props.fullWidth ? "w-full w-auto" : "",
        direction === "column" ? "flex-col" : "flex-row"
      )
    );

    return (
      <StyledCard {...props} ref={ref}>
        {children}
      </StyledCard>
    );
  }
);

export default Card;

Card.displayName = getDisplayName("Card");
