import { LogoDark, LogoLight } from "@/assets";
import { Box, Drawer, Icon, IconButton, useTheme } from "auera-ui";
import Image from "next/image";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { createStyle, merge } from "stywind";
import NavLinks from "./NavLinks";
import Community from "./Community";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const icon = {
    light: IoMdMoon,
    dark: MdWbSunny,
  };
  const I = merge.single(icon, mode);
  const Nav = createStyle("header").classname(
    "w-full h-auto border-b border-b-sidebar backdrop-blur-[6px] bg-navbar flex"
  );
  const Container = createStyle("div").classname(
    "justify-between p-3 px-5 flex w-full"
  );
  return (
    <Nav>
      <Container>
        <Box className="gap-5 items-center">
          <Link href="/">
            <Image
              src={mode === "light" ? LogoLight.src : LogoDark.src}
              alt="Logo"
              width={100}
              height={100}
              className="w-[120px]"
            />
          </Link>
          <NavLinks className="max-[650px]:hidden" />
        </Box>
        <Box className="gap-3 items-center">
          <Drawer.Trigger
            value="mobile-menu"
            className="hidden max-[650px]:block"
          >
            <IconButton variants="outline">
              <IoMenu size={18} />
            </IconButton>
          </Drawer.Trigger>
          <Community className="max-[650px]:hidden" />
          <IconButton variants="outline" size="lg" onClick={toggleTheme}>
            <Icon icon={I as React.ElementType} size={18} />
          </IconButton>
        </Box>
      </Container>
    </Nav>
  );
};

export default Navbar;
