import { useMemo } from "react";
import { RootVariants, root, body, BodyVariants } from "./card-variants";
import { createStyle, tw } from "stywind";
import { AueraDivWithMotion } from "../../core/ElementWithmotion";
import { useCardRules } from "@/hook/useStyleRules";
import { ModeType } from "@/types/auera-system";

export const useCard = (
  props: RootVariants & BodyVariants & { id: string; mode: ModeType }
) => {
  const {
    fullWidth,
    classNames,
    variant,
    hidden,
    direction,
    centerContent,
    design,
    id,
    mode,
  } = props;

  const StyledRoot = createStyle(AueraDivWithMotion);
  const StyledChildren = createStyle("div");

  const { appliedDesign, appliedVariant, appliedClassName } = useCardRules(
    id,
    classNames?.root,
    variant as any,
    design as any,
    mode
  );

  const rootStyles = useMemo(
    () =>
      tw(
        root({
          fullWidth,
          hidden,
          variant: appliedVariant?.value ?? variant,
          direction,
          design: appliedDesign?.value ?? design,
        }),
        appliedClassName?.value,
        classNames?.root
      ),
    [
      fullWidth,
      classNames?.root,
      variant,
      hidden,
      direction,
      design,
      appliedClassName?.value,
      appliedDesign?.value,
      appliedVariant?.value,
    ]
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
