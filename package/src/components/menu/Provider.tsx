import { MenuItemProps, MenuPadProps, MenuProps } from "../../types/auera-ui";
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuTrigger from "./MenuTrigger";
import MenuPad from "./MenuPad";
import { tw } from "stywind";
import Menu from "./Menu";
import { Box } from "auera-ui";
import { MenuContext } from "@/context/menu";
import { useMode } from "@/hook/use";
import { useMenuItemRules } from "@/hook/useStyleRules";

const Provider: React.FC<MenuProps> = ({
  children,
  useColorOnHover,
  mode,
  ...props
}) => {
  const { currentMode } = useMode(mode);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const renderChildren = () => {
    const validChildren = React.Children.toArray(children)
      .filter(React.isValidElement)
      .filter(
        (element) =>
          React.isValidElement(element) && element.type !== MenuTrigger
      );

    return validChildren.map((child, index) => {
      if (!React.isValidElement(child)) return null;

      if (child.type === MenuPad) {
        const pad = child as React.ReactElement<MenuPadProps>;
        return (
          <MenuPad key={index} {...pad.props}>
            {pad.props.children}
          </MenuPad>
        );
      }

      if (child.type === MenuItem) {
        const isEdge =
          index === 0 ||
          index === validChildren.length - 1 ||
          validChildren.filter((c) => c.type === MenuItem).length === 1;

        const item = child as React.ReactElement<MenuItemProps>;
        const { menuItemClass } = useMenuItemRules(
          item.props.className,
          item.props.id || ""
        );
        return (
          <MenuItem
            key={index}
            {...item.props}
            className={tw(
              isEdge && index === 0
                ? "rounded-t-xl"
                : isEdge
                ? "rounded-b-xl"
                : "",
              menuItemClass?.value,
              item.props.className
            )}
          >
            {item.props.children}
          </MenuItem>
        );
      }

      return child;
    });
  };

  const trigger = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuTrigger
  );

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        isVisible,
        onClose,
        onOpen,
        useColorOnHover,
        mode: currentMode,
      }}
    >
      <Box className="flex-col gap-4">
        {trigger}
        <Menu {...props}>
          {renderChildren().filter(
            (element) =>
              React.isValidElement(element) && element.type !== MenuTrigger
          )}
        </Menu>
      </Box>
    </MenuContext.Provider>
  );
};

export default Provider;

Provider.displayName = "AueraUI.MenuProvider";
