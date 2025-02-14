import { useMemo } from "react";
import { RootVariants, root, body, BodyVariants } from "./card-variants";
import { createStyle, tw } from "stywind";
import { AueraDivWithMotion } from "../../core/ElementWithmotion";

export const useCard = (props: RootVariants & BodyVariants) => {
  const { fullWidth, classNames, variant, hidden, direction, centerContent } =
    props;

  const StyledRoot = createStyle(AueraDivWithMotion);
  const StyledChildren = createStyle("div");

  const rootStyles = useMemo(
    () =>
      tw(
        root({
          fullWidth,
          hidden,
          variant,
          direction,
        }),
        classNames?.root
      ),
    [fullWidth, classNames?.root, variant, hidden, direction]
  );

  const bodyStyles = useMemo(
    () => tw(body({ centerContent }), classNames?.body),
    [centerContent, classNames]
  );

  return {
    Root: useMemo(() => StyledRoot.classname(rootStyles), [rootStyles]),
    Body: useMemo(() => StyledChildren.classname(bodyStyles), [bodyStyles]),
  };
};
