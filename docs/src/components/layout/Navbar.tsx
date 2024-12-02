import { LogoDark, LogoLight } from "@/assets";
import { Box, Icon, IconButton, useTheme } from "auera-ui";
import Image from "next/image";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { createStyle, merge } from "stywind";
import NavLinks from "./NavLinks";
import Community from "./Community";

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const icon = {
    light: IoMdMoon,
    dark: MdWbSunny,
  };
  const I = merge.single(icon, mode);
  const Nav = createStyle("nav").classname(
    "w-full top-0 sticky p-3 px-5 h-auto backdrop-blur-[6px] bg-navbar justify-between z-50 flex"
  );
  return (
    <Nav>
      <Box className="gap-3 items-center">
        <Image
          src={mode === "light" ? LogoLight.src : LogoDark.src}
          alt="Logo"
          width={100}
          height={100}
          className="w-[120px]"
        />
        <NavLinks />
      </Box>
      <Box className="gap-3 items-center">
        <Community />
        <IconButton variants="outline" size="lg" onClick={toggleTheme}>
          <Icon icon={I as React.ElementType} size={18} />
        </IconButton>
      </Box>
    </Nav>
  );
};

export default Navbar;
