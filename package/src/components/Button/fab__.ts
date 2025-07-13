import { createStyle, tw } from "stywind";
import { fab, FabVariants } from "./fab-variants";
import { AueraDiv } from "../../core/AueraElement";
import { useMemo } from "react";
import { zIndexKeys } from "../../utils/keys";
import { zIndex } from "../../types/keys";
import { ModeType } from "@/types/auera-system";
import { useFabRules } from "@/hook/useStyleRules";

const useComputeFab = (
  props: FabVariants & {
    zIndex: zIndex;
    currentMode: ModeType;
    id: string | undefined;
  }
) => {
  const {
    className,
    variant,
    color,
    size,
    disabled,
    type,
    position,
    zIndex,
    design,
    currentMode,
    id,
  } = props;

  const {
    appliedClassName,
    appliedColor,
    appliedDesign,
    appliedType,
    appliedVariant,
    appliedZindex,
  } = useFabRules(id!, className, variant!, currentMode, color, design!);

  const FabComp = createStyle(AueraDiv);

  const styles = useMemo(
    () =>
      tw(
        fab({
          variant: appliedVariant?.value || variant,
          size,
          disabled,
          color: appliedColor?.value || color,
          type: appliedType?.value || type,
          position,
          design: appliedDesign?.value || design,
        }),
        zIndexKeys[appliedZindex?.value || zIndex],
        appliedClassName,
        className
      ),
    [
      appliedClassName,
      className,
      color,
      disabled,
      size,
      variant,
      type,
      position,
      zIndex,
      design,
    ]
  );

  return useMemo(() => FabComp.classname(styles), [styles]);
};

export default useComputeFab;
