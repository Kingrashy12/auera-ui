import { LogoDark, LogoLight } from "@/assets";
import { Drawer, IconButton, useTheme } from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import SideBarContent from "../SideBarContent";

const MobileSideBar = () => {
  const { mode } = useTheme();
  return (
    <Drawer value="tool-bar">
      <Drawer.Panel position="left">
        <Drawer.Header>
          <Link href="/">
            <Image
              src={mode === "light" ? LogoLight.src : LogoDark.src}
              alt="Logo"
              width={100}
              height={100}
              className="w-[120px]"
            />
          </Link>
          <Drawer.Trigger type="close" value="">
            <IconButton variants="outline">
              <IoClose size={18} />
            </IconButton>
          </Drawer.Trigger>
        </Drawer.Header>
        <Drawer.Content className="px-[25px]">
          <SideBarContent />
        </Drawer.Content>
      </Drawer.Panel>
    </Drawer>
  );
};

export default MobileSideBar;
