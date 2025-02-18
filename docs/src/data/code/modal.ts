export const modal_codes = {
  demo: `import { Button, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
    <Button
     radius="md"
     withTrigger
     trigger="modal"
     triggerType="open"
     triggerValue="modal-demo"
    >
      Open Modal
    </Button>
   </Stack>
 )
};`,
  form_modal: `import { Button, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
    <Button
     radius="md"
     withTrigger
     trigger="modal"
     triggerType="open"
     triggerValue="form-modal"
    >
     Login
    </Button>
   </Stack>
 )
};`,
  demo_modal: `import {
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
          <Button onClick={deleteItem} radius="md" colorScheme="danger">
            Delete
          </Button>
        </ModalFooter>
      </ModalPanel>
    </Modal>
  );
};

export default ModalDemo;`,
  form_modal_overlay: `import {
  Button,
  Checkbox,
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalPanel,
  PasswordInput,
  TextInput,
} from "auera-ui";
import React from "react";
import { IoClose } from "react-icons/io5";
import { TiUser } from "react-icons/ti";

const FormModal = () => {
  return (
    <Modal value="form-modal">
      <ModalPanel size="md">
        <ModalHeader>
          <h1 className="text-xl font-inter font-semibold theme-dark:text-white">
            Login
          </h1>
          <IconButton
            withTrigger
            trigger="modal"
            triggerType="close"
            triggerValue="form-modal"
            variant="ghost"
            radius="xl"
          >
            <IoClose size={18} />
          </IconButton>
        </ModalHeader>
        <ModalContent>
          <form className="flex-col flex gap-5">
            <TextInput
              name="username"
              placeholder="Username"
              icon={TiUser}
              iconSize={22}
              required
            />
            <PasswordInput
              placeholder="Password"
              name="password"
              required
            />
            <Checkbox
              radius="md"
              classNames={{ container: "theme-dark:text-white" }}
            >
              Remeber me
            </Checkbox>
            <Button fullWidth radius="xl">
              Login
            </Button>
          </form>
        </ModalContent>
      </ModalPanel>
    </Modal>
  );
};

export default FormModal;`,
};
