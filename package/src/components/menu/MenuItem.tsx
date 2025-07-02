import React from "react";
import { useComputeItem } from "./use-menu";
import { MenuItemProps } from "../../types/auera-ui";
import { useMenu } from "@/hook/useMenu";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  color,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const { onClose, useColorOnHover, mode } = useMenu();

  const Component = useComputeItem({
    className,
    color,
    disabled,
    useColorOnHover,
    id: props.id || "",
  });

  const killMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
    onClick?.(event);
  };

  return (
    <Component mode={mode} {...props} onClick={killMenu}>
      {children}
    </Component>
  );
};

export default MenuItem;

MenuItem.displayName = "AueraUI.MenuItem";
