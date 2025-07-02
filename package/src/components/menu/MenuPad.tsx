import React from "react";
import { tw } from "stywind";
import MenuItem from "./MenuItem";
import { MenuItemProps, MenuPadProps } from "../../types/auera-ui";
import MenuPadHeader from "./MenuPadHeader";
import { useMenuItemRules, useMenuPadRules } from "@/hook/useStyleRules";

const MenuPad: React.FC<MenuPadProps> = ({ children, className, ...props }) => {
  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuItem
  );
  const header = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuPadHeader
  );

  const { menuPadClass } = useMenuPadRules(className, props.id || "");

  return (
    <div className={tw("px-2 py-2", className, menuPadClass?.value)}>
      {header}
      {items.map((element, index) => {
        const typedElement = element as React.ReactElement<MenuItemProps>;
        const { menuItemClass } = useMenuItemRules(
          typedElement.props.className,
          typedElement.props.id || ""
        );
        return (
          <MenuItem
            key={index}
            {...typedElement.props}
            className={tw(
              "rounded-lg",
              menuItemClass?.value,
              typedElement.props.className
            )}
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
