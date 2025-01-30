import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useProps } from "@/utils";
import { CardWithMotion } from "../../types/auera-motion";
import { useCard } from "./use-card";

/** Card component for displaying content in a styled container.*/
const Card = forwardRef<HTMLDivElement, CardWithMotion>((props, ref) => {
  const { centerContent, fullWidth, className, hidden, direction, ...rest } =
    props;

  const Props = useProps(rest, "div");

  const Component = useCard({
    centerContent,
    className,
    hidden,
    direction,
    fullWidth,
  });

  return (
    <Component ref={ref} {...Props}>
      {props.children}
    </Component>
  );
});

export default Card;

Card.displayName = getDisplayName("Card");
