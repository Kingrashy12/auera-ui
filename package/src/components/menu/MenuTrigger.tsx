import React from "react";
import { useMenu } from "./Provider";
import { DivProps, tw } from "stywind";

interface MenuTriggerProps extends DivProps {
  children: React.ReactNode;
}

const MenuTrigger: React.FC<MenuTriggerProps> = ({ children, ...props }) => {
  const { onOpen } = useMenu();
  return (
    <div onClick={onOpen} className={tw("w-fit", props.className)}>
      {children}
    </div>
  );
};

export default MenuTrigger;

MenuTrigger.displayName = "AueraUI.MenuTrigger";
