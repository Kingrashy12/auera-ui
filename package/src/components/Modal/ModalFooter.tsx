import { ModalFooterProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { usePanel } from "@/hook/usePanel";
import { useComputeFooter } from "./use-modal";

const ModalFooter = ({
  children,
  showBorder = true,
  position,
  ...props
}: ModalFooterProps) => {
  const { mode } = usePanel();

  const Footer = useComputeFooter({
    mode,
    showBorder,
    className: props.className,
  });

  return <Footer {...props}>{children}</Footer>;
};

export default ModalFooter;
ModalFooter.displayName = getDisplayName("ModalFooter");
