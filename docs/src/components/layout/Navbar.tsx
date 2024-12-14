import { LogoDark, LogoLight } from "@/assets";
import { Box, Icon, IconButton, useTheme, Drawer } from "auera-ui";
import Image from "next/image";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { createStyle } from "stywind";
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

  const Nav = createStyle("header").classname(
    "w-full h-auto border-b border-b-sidebar bg-sidebar flex"
  );
  const Container = createStyle("div").classname(
    "justify-between p-3 px-5 flex w-full"
  );
  return (
    <Nav>
      <Container>
        <Box className="gap-5 items-center" fullWidth>
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
          <NavLinks className="max-[650px]:hidden" />
        </Box>
        <Box className="gap-3 items-center">
          <Drawer.Trigger
            value="mobile-menu"
            className="hidden max-[650px]:block"
          >
            <IconButton variants="outline" radius="full">
              <IoMenu size={18} />
            </IconButton>
          </Drawer.Trigger>
          <Community className="max-[650px]:hidden" />
          <IconButton
            variants="outline"
            size="lg"
            radius="full"
            onClick={toggleTheme.main}
          >
            <Icon icon={icon[mode]} size={18} />
          </IconButton>
        </Box>
      </Container>
    </Nav>
  );
};

export default Navbar;
