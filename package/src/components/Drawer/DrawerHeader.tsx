import { ModalHeaderType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerHeader } from "./use-drawer";
import { useDrawerPanel } from "@/hook/usePanel";

const DrawerHeader = ({
  children,
  showBorder = true,

  ...props
}: ModalHeaderType) => {
  const mode = useDrawerPanel().mode;

  const Header = useDrawerHeader({
    className: props.className,
    showBorder,
    mode,
  });

  return <Header {...props}>{children}</Header>;
};

export default DrawerHeader;
DrawerHeader.displayName = getDisplayName("DrawerHeader");
