import { useMenu } from "@/hook/useMenu";
import React from "react";
import { DivProps, tw } from "stywind";

interface MenuTriggerProps extends DivProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const MenuTrigger: React.FC<MenuTriggerProps> = ({
  children,
  disabled,
  ...props
}) => {
  const { onOpen } = useMenu();

  const handleOpen = () => {
    if (disabled) return;
    onOpen();
  };

  return (
    <div onClick={handleOpen} className={tw("w-fit", props.className)}>
      {children}
    </div>
  );
};

export default MenuTrigger;

MenuTrigger.displayName = "AueraUI.MenuTrigger";
