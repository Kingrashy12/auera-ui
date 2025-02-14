import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { CardWithMotion, AueraMotionDivRef } from "../../types/auera-motion";
import { useCard } from "./use-card";
import { Media } from "../Image";
import { tw } from "stywind";

/** Card component for displaying content in a styled container.*/
const Card = forwardRef<HTMLDivElement, CardWithMotion>(
  (
    {
      centerContent,
      fullWidth,
      classNames,
      variant,
      hidden,
      direction,
      renderImage,
      renderHeader,
      img,
      ...props
    },
    ref
  ) => {
    const { Root, Body } = useCard({
      centerContent,
      classNames,
      hidden,
      direction,
      fullWidth,
      variant,
    });

    const getImage = () => {
      if (img) {
        return (
          <Media
            src={img?.src}
            alt={img?.alt}
            width={img?.width}
            height={img?.height}
            className={tw(img?.className, "rounded-t-lg")}
            style={img?.style}
          />
        );
      } else if (renderImage) {
        return renderImage();
      }
      return null;
    };

    return (
      <Root ref={ref as AueraMotionDivRef} {...props}>
        {renderHeader && renderHeader()}
        {getImage()}
        <Body>{props.children}</Body>
      </Root>
    );
  }
);

export default Card;

Card.displayName = getDisplayName("Card");
