import {
  closeModal,
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalPanel,
} from "auera-ui";
import React from "react";
import { IoIosClose } from "react-icons/io";

const Radius2xl = () => {
  return (
    <Modal value="radius-2xl">
      <ModalPanel radius="2xl" size="md">
        <ModalHeader>
          <h1 className="text-xl font-inter font-semibold theme-dark:text-white">
            Modal Header
          </h1>
          <IconButton radius="xl" onClick={closeModal}>
            <IoIosClose size={20} />
          </IconButton>
        </ModalHeader>
        <ModalContent className="font-inter">
          <p className="text-base text-gray-600 theme-dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel{" "}
            nulla, inventore delectus dolorem maiores voluptate veniam sit eius{" "}
            dolorum!
          </p>
        </ModalContent>
      </ModalPanel>
    </Modal>
  );
};

export default Radius2xl;
