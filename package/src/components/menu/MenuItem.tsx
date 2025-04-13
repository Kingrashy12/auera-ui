import React from "react";
import { useComputeItem } from "./use-menu";
import { MenuItemProps } from "../../types/auera-ui";
import { useMenu } from "./Provider";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  color,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const { onClose, useColorOnHover } = useMenu();

  const Component = useComputeItem({
    className,
    color,
    disabled,
    useColorOnHover,
  });

  const killMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
    onClick?.(event);
  };

  return (
    <Component {...props} onClick={killMenu}>
      {children}
    </Component>
  );
};

export default MenuItem;

MenuItem.displayName = "AueraUI.MenuItem";
