import { useMemo } from "react";
import { RootVariants, root, body, BodyVariants } from "./card-variants";
import { createStyle } from "stywind";
import { AueraDivWithMotion } from "../../core/ElementWithmotion";

export const useCard = (props: RootVariants & BodyVariants) => {
  const { fullWidth, classNames, variant, hidden, direction, centerContent } =
    props;

  const Root = useMemo(
    () =>
      createStyle(AueraDivWithMotion).classname(
        root({
          className: classNames?.root,
          fullWidth,
          hidden,
          variant,
          direction,
        })
      ),
    [fullWidth, classNames?.root, variant, hidden, direction]
  );

  const Body = useMemo(
    () =>
      createStyle("div").classname(
        body({ centerContent, className: classNames?.body })
      ),
    [centerContent, classNames]
  );

  return { Root, Body };
};
