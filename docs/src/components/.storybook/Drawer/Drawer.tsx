import React from "react";
import {
  Button,
  Drawer as D,
  DrawerPanelProps,
  DrawerProps,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  DrawerTrigger,
  IconButton,
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "@/components/example/DrawerContent";

const Drawer = ({ position, type }: DrawerProps & DrawerPanelProps) => {
  return (
    <>
      <D value="default">
        <DrawerPanel position={position} type={type}>
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
      </D>
      <DrawerTrigger value="default">
        <Button>Open Drawer</Button>
      </DrawerTrigger>
    </>
  );
};

export default Drawer;
