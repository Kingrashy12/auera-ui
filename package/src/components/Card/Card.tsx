import { forwardRef } from "react";
import { getDisplayName } from "@/utils/displayname";
import { useCard } from "./use-card";
import { Image } from "../Image";
import { tw } from "stywind";
import { useDesign, useMode } from "@/hook/use";
import { CardProps } from "../../types/auera-ui";
import { AueraElementProps } from "@/types/auera-system";

type Ref =
  | React.LegacyRef<
      React.ForwardRefExoticComponent<
        Omit<AueraElementProps<"div">, "ref"> & React.RefAttributes<HTMLElement>
      >
    >
  | undefined;

/** Card component for displaying content in an organized way.*/
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      centerContent,
      fullWidth,
      classNames,
      variant = "raised",
      hidden,
      direction,
      renderImage,
      header,
      footer,
      img,
      design,
      mode,
      ...props
    },
    ref
  ) => {
    const { currentMode } = useMode(mode);
    const { currentDesign } = useDesign(design);

    const { Root, Body } = useCard({
      centerContent,
      classNames,
      hidden,
      direction,
      fullWidth,
      variant,
      design: currentDesign,
      id: String(props.id),
      mode: currentMode,
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
      <Root mode={currentMode} ref={ref as Ref} {...props}>
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
