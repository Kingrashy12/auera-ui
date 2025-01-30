import { useMemo } from "react";
import card, { CardVariants } from "./card-variants";
import { createStyle } from "stywind";
import { AueraDivWithMotion } from "@/core/ElementWithmotion";

export const useCard = (props: CardVariants) => {
  const { centerContent, fullWidth, className, hidden, direction } = props;

  return useMemo(
    () =>
      createStyle(AueraDivWithMotion).classname(
        card({ centerContent, className, fullWidth, hidden, direction })
      ),
    [className, direction, fullWidth, hidden, centerContent]
  );
};
