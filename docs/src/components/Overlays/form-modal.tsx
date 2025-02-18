import {
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
import { HiLockClosed } from "react-icons/hi2";
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
        <ModalContent className="font-inter">
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
              icon={HiLockClosed}
              name="password"
              required
            />
            <Checkbox
              radius="md"
              classNames={{ container: "theme-dark:text-white" }}
            >
              Remeber me
            </Checkbox>
            <Button fullWidth radius="xl" className="text-sm font-inter">
              Login
            </Button>
          </form>
        </ModalContent>
      </ModalPanel>
    </Modal>
  );
};

export default FormModal;
