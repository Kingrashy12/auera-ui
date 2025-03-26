import { createStyle, tw } from "stywind";
import { fab, FabVariants } from "./fab-variants";
import { AueraDiv } from "../../core/AueraElement";
import { useMemo } from "react";
import { zIndexKeys } from "../../utils/keys";
import { zIndex } from "../../types/keys";

const useComputeFab = (props: FabVariants & { zIndex: zIndex }) => {
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
  } = props;

  const FabComp = createStyle(AueraDiv);

  const styles = useMemo(
    () =>
      tw(
        fab({ variant, size, disabled, color, type, position, design }),
        zIndexKeys[zIndex],
        className
      ),
    [className, color, disabled, size, variant, type, position, zIndex, design]
  );

  return useMemo(() => FabComp.classname(styles), [styles]);
};

export default useComputeFab;
