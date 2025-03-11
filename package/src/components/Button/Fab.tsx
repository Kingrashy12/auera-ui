import { FabProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import React from "react";
import useComputeFab from "./fab__";

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
  ...props
}) => {
  const FabComp = useComputeFab({
    className,
    color,
    variant,
    zIndex,
    size,
    position,
    type,
  });

  return (
    <FabComp
      mode={mode}
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
