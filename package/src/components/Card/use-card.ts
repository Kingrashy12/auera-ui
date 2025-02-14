import { useMemo } from "react";
import { RootVariants, root, body, BodyVariants } from "./card-variants";
import { createStyle } from "stywind";
import { AueraDivWithMotion } from "../../core/ElementWithmotion";

export const useCard = (props: RootVariants & BodyVariants) => {
  const { fullWidth, classNames, variant, hidden, direction, centerContent } =
    props;

  const StyledRoot = createStyle(AueraDivWithMotion);
  const StyledChildren = createStyle("div");

  const rootStyles = useMemo(
    () =>
      root({
        className: classNames?.root,
        fullWidth,
        hidden,
        variant,
        direction,
      }),
    [fullWidth, classNames?.root, variant, hidden, direction]
  );

  const bodyStyles = useMemo(
    () => body({ centerContent, className: classNames?.body }),
    [centerContent, classNames]
  );

  return {
    Root: useMemo(() => StyledRoot.classname(rootStyles), [rootStyles]),
    Body: useMemo(() => StyledChildren.classname(bodyStyles), [bodyStyles]),
  };
};
