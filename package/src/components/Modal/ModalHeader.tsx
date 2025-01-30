import { ModalHeaderType } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useComputeHeader } from "./use-modal";

const ModalHeader = ({
  children,
  showBorder = true,
  ...props
}: ModalHeaderType) => {
  const { mode } = usePanel();

  const Header = useComputeHeader({
    mode,
    showBorder,
    className: props.className,
  });

  return <Header {...props}>{children}</Header>;
};

export default ModalHeader;
ModalHeader.displayName = getDisplayName("ModalHeader");
