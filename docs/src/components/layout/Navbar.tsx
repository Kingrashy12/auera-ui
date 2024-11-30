import { LogoDark, LogoLight } from "@/assets";
import { Icon, IconButton, useTheme } from "auera-ui";
import Image from "next/image";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { createStyle, merge } from "stywind";

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const icon = {
    light: IoMdMoon,
    dark: MdWbSunny,
  };
  const I = merge.single(icon, mode);
  const Nav = createStyle("nav").classname(
    "w-full top-0 sticky p-3 h-auto border-b bg-navbar justify-between z-50 flex"
  );
  return (
    <Nav>
      <Image
        src={mode === "light" ? LogoLight.src : LogoDark.src}
        alt="Logo"
        width={100}
        height={100}
        className="w-[120px]"
      />
      <IconButton variants="outline" size="lg" onClick={toggleTheme}>
        <Icon icon={I as React.ElementType} size={18} />
      </IconButton>
    </Nav>
  );
};

export default Navbar;
