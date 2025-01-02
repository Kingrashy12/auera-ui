import { LogoDark, LogoLight } from "@/assets";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPanel,
  IconButton,
  useTheme,
} from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import SideBarContent from "../SideBarContent";

const MobileSideBar = () => {
  const { mode } = useTheme();
  return (
    <Drawer value="tool-bar">
      <DrawerPanel position="left">
        <DrawerHeader>
          <Link href="/">
            <Box className="items-center gap-1">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
              <Image
                src={mode === "light" ? LogoLight.src : LogoDark.src}
                alt="Logo"
                width={70}
                height={70}
                className="w-[120px]"
              />
            </Box>
          </Link>

          <IconButton
            withTrigger
            trigger="drawer"
            triggerType="close"
            triggerValue="tool-bar"
            variants="outline"
            radius="full"
          >
            <IoClose size={18} />
          </IconButton>
        </DrawerHeader>
        <DrawerContent className="!p-0">
          <SideBarContent />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default MobileSideBar;
