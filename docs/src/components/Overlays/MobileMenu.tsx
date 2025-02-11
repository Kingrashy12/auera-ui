import { LogoDark, LogoLight } from "@/assets";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  IconButton,
  useTheme,
} from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import NavLinks from "../layout/NavLinks";
import Community from "../layout/Community";

const MobileMenu = () => {
  const { mode } = useTheme();

  return (
    <Drawer value="mobile-menu">
      <DrawerPanel>
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
