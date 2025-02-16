import { MenuProps } from "../../types/auera-ui";
import React, { useRef, useState } from "react";
import { MenuContext } from "@/context/menu";
import { Menu } from "./List";
import { getDisplayName } from "@/utils/displayname";
import MenuItem from "./MenuItem";
import MenuTrigger from "./MenuTrigger";
import Box from "../Box/Box";
import { useMode } from "@/hook/use";

const MenuProvider = ({ children, ...props }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { currentMode } = useMode(props.mode);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const trigger = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuTrigger
  );

  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== MenuTrigger
  );

  const renderChildren = (elements: React.ReactNode[], isTrigger?: boolean) => {
    return elements.map((element, index) => {
      const eadge = index === elements.length - 1 || index === 0;
      if (!React.isValidElement(element)) return null;

      const typedElement = element as React.ReactElement<{
        [key: string]: any;
      }>;
      if (isTrigger) {
        return (
          <MenuTrigger key={index} ref={triggerRef}>
            {typedElement.props.children}
          </MenuTrigger>
        );
      }

      if (element.type !== MenuItem) {
        return element;
      } else {
        return (
          <MenuItem
            key={index}
            className={`${
              eadge && typedElement.props.type !== "curved"
                ? index === 0
                  ? "rounded-t-lg"
                  : "rounded-b-lg"
                : ""
            } ${typedElement.props.className || ""}`}
            {...typedElement.props}
          >
            {typedElement.props.children}
          </MenuItem>
        );
      }
    });
  };

  return (
    <MenuContext.Provider
      value={{ isOpen, onClose, onOpen, mode: currentMode }}
    >
      <Box direction="column">
        {renderChildren(trigger, true)}
        <Menu {...props}>{renderChildren(items)}</Menu>
      </Box>
    </MenuContext.Provider>
  );
};

export default MenuProvider;

MenuProvider.displayName = getDisplayName("MenuProvider");
