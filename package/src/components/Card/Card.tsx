import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { CardWithMotion, AueraMotionDivRef } from "../../types/auera-motion";
import { useCard } from "./use-card";
import { Image } from "../Image";
import { tw } from "stywind";

/** Card component for displaying content in an organized way.*/
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
      header,
      footer,
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
          <Image
            src={img?.src}
            alt={img?.alt}
            width={img?.width}
            height={img?.height}
            className={tw("rounded-t-lg", img?.className)}
            style={img?.style}
            isLoading={img.isLoading}
          />
        );
      } else if (renderImage) {
        return renderImage();
      }
      return null;
    };

    return (
      <Root ref={ref as AueraMotionDivRef} {...props}>
        {header && header}
        {getImage()}
        <Body>{props.children}</Body>
        {footer && footer}
      </Root>
    );
  }
);

export default Card;

Card.displayName = getDisplayName("Card");
