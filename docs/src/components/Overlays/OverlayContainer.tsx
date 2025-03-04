import React from "react";
import MobileMenu from "./MobileMenu";
import MobileSideBar from "./MobileSideBar";
import DrawerDemo from "./drawer-example";
import FloatDrawerDemo from "./float-drawer-demo";
import LeftDrawerDemo from "./left-drawer-demo";
import ModalDemo from "./modal-demo";
import FormModal from "./form-modal";
import ModalDemoConatiner from "./modal/container";

const OverlayContainer = () => {
  return (
    <>
      <MobileMenu />
      <MobileSideBar />
      <DrawerDemo />
      <FloatDrawerDemo />
      <LeftDrawerDemo />
      <ModalDemo />
      <FormModal />
      <ModalDemoConatiner />
    </>
  );
};

export default OverlayContainer;
