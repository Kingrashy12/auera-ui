import React from "react";
import {
  Drawer,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  IconButton,
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "../example/DrawerContent";

const LeftDrawerDemo = () => {
  return (
    <Drawer value="left-drawer-demo">
      <DrawerPanel position="left">
        <DrawerHeader>
          <h1 className="font-medium text-lg theme-dark:text-white">
            Notifications
          </h1>

          <IconButton
            withTrigger
            trigger="drawer"
            triggerType="close"
            triggerValue="default"
            variant="outline"
          >
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

export default LeftDrawerDemo;
