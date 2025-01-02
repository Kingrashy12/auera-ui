import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useCard } from "./use-card";
import { useProps } from "@/utils";
import { CardWithMotion } from "../../types/auera-motion";

/** Card component for displaying content in a styled container.*/
const Card = forwardRef<HTMLDivElement, CardWithMotion>((props, ref) => {
  const { Base } = useCard(props);
  const Props = useProps(props, "div");

  return (
    <Base ref={ref} {...Props}>
      {props.children}
    </Base>
  );
});

export default Card;

Card.displayName = getDisplayName("Card");
