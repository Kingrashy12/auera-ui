import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { CardProps } from "../../types/auera-ui";
import { useCard } from "./use-card";

/** Card component for displaying content in a styled container.*/
const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { Base } = useCard(props);

  return (
    <Base ref={ref} {...props}>
      {props.children}
    </Base>
  );
});

export default Card;

Card.displayName = getDisplayName("Card");
