import {
  Box,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  IconButton,
} from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import NavLinks from "../layout/NavLinks";
import Community from "../layout/Community";

const MobileMenu = () => {
  return (
    <Drawer value="mobile-menu">
      <DrawerPanel>
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
            withTrigger
            trigger="drawer"
            triggerType="close"
            triggerValue="mobile-menu"
            variant="outline"
            radius="full"
          >
            <IoClose size={18} />
          </IconButton>
        </DrawerHeader>
        <DrawerContent>
          <NavLinks direction="column" />
        </DrawerContent>
        <DrawerFooter>
          <Community />
        </DrawerFooter>
      </DrawerPanel>
    </Drawer>
  );
};

export default MobileMenu;
