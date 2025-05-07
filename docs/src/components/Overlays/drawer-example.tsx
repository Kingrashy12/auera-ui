import React from "react";
import {
  Drawer,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  IconButton,
  closeDrawer,
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "../example/DrawerContent";

const DrawerDemo = () => {
  return (
    <Drawer value="drawer-demo" preventScroll>
      <DrawerPanel className="bg-content border-border shadow-shadow">
        <DrawerHeader>
          <h1 className="font-medium text-lg theme-dark:text-white">
            Notifications
          </h1>

          <IconButton onClick={closeDrawer} variant="outline">
            <IoClose />
          </IconButton>
        </DrawerHeader>
        <DrawerContent>
          <Drawer_Content />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default DrawerDemo;
