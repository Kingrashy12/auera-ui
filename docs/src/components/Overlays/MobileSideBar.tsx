import {
  Box,
  closeDrawer,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPanel,
  IconButton,
} from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import SideBarContent from "../SideBarContent";

const MobileSideBar = () => {
  return (
    <Drawer value="tool-bar">
      <DrawerPanel
        position="left"
        className="bg-sidebar gap-0 tone-dark:border-neutral-700"
      >
        <DrawerHeader>
          <Link href="/">
            <Box className="items-center gap-1">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
              <h1 className="font-stencil-one theme-dark:text-white text-black text-3xl max-[550px]:text-2xl">
                AueraUI
              </h1>
            </Box>
          </Link>

          <IconButton
            onClick={closeDrawer}
            variant="outline"
            radius="xl"
            className="tone-dark:shadow-black shadow-sm"
          >
            <IoClose size={18} />
          </IconButton>
        </DrawerHeader>
        <DrawerContent className="p-0! gap-0">
          <SideBarContent />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default MobileSideBar;
