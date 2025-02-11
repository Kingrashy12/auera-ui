export const overlayCodes = {
  componentFile: `import { Modal, ModalPanel, ModalContent, ModalHeader, IconButton } from "auera-ui";
import { IoClose } from "react-icons/io5";

const AuthModal = () => {
  // Your logic here
  return (
    <Modal value="auth-modal">
        <ModalPanel>
          <ModalHeader>
            <h1>Sign in</h1>
            <IconButton
              withTrigger
              trigger="modal"
              triggerType="close"
              triggerValue="auth-modal"
              variant="ghost"
            >
              <IoClose size={18} />
            </IconButton>
          </ModalHeader>
          <ModalContent>{/* Add your modal content here */}</ModalContent>
        </ModalPanel>
      </Modal>
  );
};
  
export default AuthModal;`,
  container: `import AuthModal from "./auth";
import MenuDrawer from "./menu";

const Overlays = () => {
    return (
      <>
        <AuthModal />
        <MenuDrawer />
        {/* Add more overlays as needed */}
      </>
    );
};

export default Overlays;
  `,
  layout: `import Overlays from "../components/overlays/container";
  
const RootLayout = () => {
  return (
    <>
    {/* Other components */}
    <Overlays />
    </>
  );
};
  
export default RootLayout;`,
};
