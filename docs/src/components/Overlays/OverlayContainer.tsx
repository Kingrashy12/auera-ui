import React from "react";
import MobileMenu from "./MobileMenu";
import MobileSideBar from "./MobileSideBar";
import DrawerDemo from "./drawer-example";
import FloatDrawerDemo from "./float-drawer-demo";
import LeftDrawerDemo from "./left-drawer-demo";

const OverlayContainer = () => {
  return (
    <>
      <MobileMenu />
      <MobileSideBar />
      <DrawerDemo />
      <FloatDrawerDemo />
      <LeftDrawerDemo />
    </>
  );
};

export default OverlayContainer;
