import { Button, Modal, ModalContent, ModalFooter, ModalPanel } from "auera-ui";
import React from "react";

const ModalDemo = () => {
  return (
    <Modal value="modal-demo">
      <ModalPanel size="lg">
        <ModalContent>
          <h1>Account Created Successfully</h1>
        </ModalContent>
        <ModalFooter>
          <Button
            radius="md"
            variant="outline"
            withTrigger
            trigger="modal"
            triggerType="close"
            triggerValue="modal-demo"
          >
            Cancel
          </Button>
          <Button radius="md">Okay</Button>
        </ModalFooter>
      </ModalPanel>
    </Modal>
  );
};

export default ModalDemo;
