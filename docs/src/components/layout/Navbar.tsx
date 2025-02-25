import { Box, IconButton, openDrawer } from "auera-ui";
import Image from "next/image";
import React from "react";

import { createStyle } from "stywind";
import NavLinks from "./NavLinks";
import Community from "./Community";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
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
              <h1 className="font-stencil-one theme-dark:text-white text-black text-3xl max-[550px]:text-2xl">
                AueraUI
              </h1>
            </Box>
          </Link>
          <NavLinks className="max-[650px]:hidden" />
        </Box>
        <Box className="gap-3 items-center">
          <IconButton
            onClick={() => openDrawer("mobile-menu")}
            variant="outline"
            radius="xl"
            className="hidden max-[650px]:block"
          >
            <IoMenu size={18} />
          </IconButton>

          <Community className="max-[650px]:hidden" />
          <ToggleTheme />
        </Box>
      </Container>
    </Nav>
  );
};

export default Navbar;
