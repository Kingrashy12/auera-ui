import { MenuPadHeaderProps } from "../../types/auera-ui";
import React from "react";

const MenuPadHeader: React.FC<MenuPadHeaderProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export default MenuPadHeader;

MenuPadHeader.displayName = "AueraUI.MenuPadHeader";
