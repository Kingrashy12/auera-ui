import {
  Icon,
  IconButton,
  Menu,
  MenuItem,
  MenuTrigger,
  useTheme,
} from "auera-ui";
import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

const ToggleTheme = () => {
  const { mode, toggleTheme, system } = useTheme();

  const icon = {
    light: IoMdMoon,
    dark: MdWbSunny,
  };
  return (
    <Menu zIndex="200" className="right-5 !w-[150px]">
      <MenuTrigger>
        <IconButton variant="outline" radius="full">
          <Icon icon={icon[mode]} size={18} />
        </IconButton>
      </MenuTrigger>
      <MenuItem
        onClick={toggleTheme.dark}
        color={!system && mode === "dark" ? "info" : "default"}
      >
        <MdWbSunny size={20} />
        <p className="font-inter font-medium text-sm">Dark</p>
      </MenuItem>
      <MenuItem
        onClick={toggleTheme.light}
        color={!system && mode === "light" ? "info" : "default"}
      >
        <IoMdMoon size={20} />
        <p className="font-inter font-medium text-sm">Light</p>
      </MenuItem>
      <MenuItem
        onClick={toggleTheme.system}
        color={system === true ? "info" : "default"}
      >
        <HiMiniComputerDesktop size={20} />
        <p className="font-inter font-medium text-sm">System</p>
      </MenuItem>
    </Menu>
  );
};

export default ToggleTheme;
