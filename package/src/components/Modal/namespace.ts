import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalPanel from "./ModalPanel";
import ModalTrigger from "./ModalTrigger";
import Body from "./Modal";

const Modal = Object.assign(Body, {
  Content: ModalContent,
  Panel: ModalPanel,
  Header: ModalHeader,
  Footer: ModalFooter,
  Trigger: ModalTrigger,
});

export default Modal;
