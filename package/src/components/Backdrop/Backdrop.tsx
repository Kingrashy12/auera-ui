import { Drop } from "../../types/auera-ui";
import { useMode } from "../../hook/use";
import { getDisplayName } from "@/utils/displayname";
import { MouseEvent } from "react";
import useDrop from "./use-drop";

const Backdrop: React.FC<Drop> = ({
  open,
  onClose,
  intensity = "sm",
  mode,
  children,
  preventClose,
  zIndex,
  ...props
}) => {
  const { currentMode } = useMode(mode);

  const Drop = useDrop({
    centerContent: props.centerContent,
    open,
    intensity,
    zIndex,
    mode: currentMode,
  });

  const closeDrop = (e: MouseEvent<HTMLDivElement>) => {
    if (!preventClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Drop onClick={closeDrop} {...props}>
      {children}
    </Drop>
  );
};

export default Backdrop;

Backdrop.displayName = getDisplayName("Backdrop");
