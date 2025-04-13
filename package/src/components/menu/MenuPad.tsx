import React from "react";
import { tw } from "stywind";
import MenuItem from "./MenuItem";
import { MenuItemProps, MenuPadProps } from "../../types/auera-ui";
import MenuPadHeader from "./MenuPadHeader";

const MenuPad: React.FC<MenuPadProps> = ({ children, className }) => {
  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuItem
  );
  const header = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuPadHeader
  );

  return (
    <div className={tw("px-2 py-2", className)}>
      {header}
      {items.map((element, index) => {
        const typedElement = element as React.ReactElement<MenuItemProps>;
        return (
          <MenuItem
            key={index}
            {...typedElement.props}
            className={tw("rounded-lg", typedElement.props.className)}
          >
            {typedElement.props.children}
          </MenuItem>
        );
      })}
    </div>
  );
};

export default MenuPad;

MenuPad.displayName = "AueraUI.MenuPad";
