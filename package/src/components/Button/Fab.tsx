import { FabProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import React from "react";
import useComputeFab from "./fab__";
import { useDesign, useMode } from "@/hook/use";
import { useFabRules } from "@/hook/useStyleRules";

const Fab: React.FC<FabProps> = ({
  type,
  color,
  position,
  size,
  disabled,
  zIndex = "100",
  className,
  mode,
  variant,
  design,
  ...props
}) => {
  const { currentDesign } = useDesign(design);
  const { currentMode } = useMode(mode);

  const { appliedMode } = useFabRules(
    props.id!,
    className,
    variant!,
    currentMode,
    color,
    design!
  );

  const FabComp = useComputeFab({
    className,
    color,
    variant,
    zIndex,
    size,
    position,
    type,
    design: currentDesign,
    disabled,
    currentMode,
    id: props.id,
  });

  return (
    <FabComp
      mode={appliedMode?.value || mode}
      onClick={(e) => {
        if (!disabled && props.onClick) {
          props.onClick(e);
        }
      }}
      {...props}
    >
      {props.children}
    </FabComp>
  );
};

export default Fab;

Fab.displayName = getDisplayName("Fab");
