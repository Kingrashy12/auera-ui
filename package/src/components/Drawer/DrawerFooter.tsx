import { ModalFooterProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useDrawerPanel } from "@/hook/usePanel";
import { useDrawerFooter } from "./use-drawer";

const DrawerFooter = ({
  children,
  showBorder = true,
  position,
  ...props
}: ModalFooterProps) => {
  const { mode, themeVariant } = useDrawerPanel();

  const Footer = useDrawerFooter({
    className: props.className,
    showBorder,
    position,
  });

  return (
    <Footer mode={mode} themeVariant={themeVariant} {...props}>
      {children}
    </Footer>
  );
};

export default DrawerFooter;
DrawerFooter.displayName = getDisplayName("DrawerFooter");
