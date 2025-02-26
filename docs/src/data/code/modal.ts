export const modal_codes = {
  demo: `import { Button, Stack, openModal } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
    <Button
     radius="md"
     onClick={() => openModal("modal-demo")}
    >
      Open Modal
    </Button>
   </Stack>
 )
};`,
  form_modal: `import { Button, Stack, openModal } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
    <Button
     radius="md"
     onClick={() => openModal("form-modal")}
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
  closeModal
} from "auera-ui";

export const ModalDemo = () => {

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
            onClick={closeModal}
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
};`,
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
  closeModal
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import { TiUser } from "react-icons/ti";

export const FormModal = () => {
  return (
    <Modal value="form-modal">
      <ModalPanel size="md">
        <ModalHeader>
          <h1 className="text-xl font-inter font-semibold theme-dark:text-white">
            Login
          </h1>
          <IconButton
            onClick={closeModal}
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
};`,
};
