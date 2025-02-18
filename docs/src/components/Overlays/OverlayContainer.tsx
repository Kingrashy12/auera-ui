import React from "react";
import MobileMenu from "./MobileMenu";
import MobileSideBar from "./MobileSideBar";
import DrawerDemo from "./drawer-example";
import FloatDrawerDemo from "./float-drawer-demo";
import LeftDrawerDemo from "./left-drawer-demo";
import ModalDemo from "./modal-demo";

const OverlayContainer = () => {
  return (
    <>
      <MobileMenu />
      <MobileSideBar />
      <DrawerDemo />
      <FloatDrawerDemo />
      <LeftDrawerDemo />
      <ModalDemo />
    </>
  );
};

export default OverlayContainer;
