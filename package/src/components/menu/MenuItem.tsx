import { useMenu } from "@/hook/useMenu";
import { MenuItemProps } from "../../types/auera-ui";
import React from "react";
import { getDisplayName } from "@/utils/displayname";
import { useComputeItem } from "./use-menu";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, className, disabled, color, type, onClick, ...rest } =
    props;
  const { onClose, mode } = useMenu();

  const Component = useComputeItem({
    className,
    disabled,
    type,
    color,
  });

  const killMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
    onClick?.(event);
  };

  return (
    <>
      {props.type === "padded" ? (
        <div className="w-full p-2">
          <Component mode={mode} onClick={killMenu} {...rest}>
            {children}
          </Component>
        </div>
      ) : (
        <Component mode={mode} onClick={killMenu} {...rest}>
          {children}
        </Component>
      )}
    </>
  );
};

export default MenuItem;
MenuItem.displayName = getDisplayName("MenuItem");
