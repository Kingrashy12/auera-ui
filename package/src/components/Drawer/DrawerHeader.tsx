import { ModalHeaderProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerHeader } from "./use-drawer";
import { useDrawerPanel } from "@/hook/usePanel";

const DrawerHeader = ({
  children,
  showBorder = true,
  ...props
}: ModalHeaderProps) => {
  const { mode, themeVariant } = useDrawerPanel();

  const Header = useDrawerHeader({
    className: props.className,
    showBorder,
  });

  return (
    <Header mode={mode} themeVariant={themeVariant} {...props}>
      {children}
    </Header>
  );
};

export default DrawerHeader;
DrawerHeader.displayName = getDisplayName("DrawerHeader");
