import {
  Button,
  closeModal,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalPanel,
  toast,
} from "auera-ui";
import React from "react";

const ModalDemo = () => {
  const deleteItem = () => {
    toast.success("Item successfully deleted");
    closeModal();
  };

  return (
    <Modal value="modal-demo">
      <ModalPanel size="lg">
        <ModalHeader>
          <h1 className="text-xl font-poppins font-semibold theme-dark:text-white">
            Confirm Action
          </h1>
        </ModalHeader>
        <ModalContent className="font-inter">
          <p className="text-base text-gray-600 theme-dark:text-neutral-400">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </ModalContent>
        <ModalFooter className="font-inter text-sm">
          <Button radius="md" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={deleteItem} radius="md" colorScheme="danger">
            Delete
          </Button>
        </ModalFooter>
      </ModalPanel>
    </Modal>
  );
};

export default ModalDemo;
