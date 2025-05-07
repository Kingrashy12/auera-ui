import { ModalHeaderProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useComputeHeader } from "./use-modal";

const ModalHeader = ({
  children,
  showBorder = true,
  ...props
}: ModalHeaderProps) => {
  const { mode, themeVariant } = usePanel();

  const Header = useComputeHeader({
    showBorder,
    className: props.className,
  });

  return (
    <Header mode={mode} themeVariant={themeVariant} {...props}>
      {children}
    </Header>
  );
};

export default ModalHeader;
ModalHeader.displayName = getDisplayName("ModalHeader");
