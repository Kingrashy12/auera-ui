import { useMenu } from "@/hook/useMenu";
import { MenuItemProps } from "../../types/auera-ui";
import React from "react";
import { getDisplayName } from "@/utils/displayname";
import { useComputeItem } from "./use-menu";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { onClose: closeMenu } = useMenu();

  const Component = useComputeItem({
    className: props.className,
    disabled: props.disabled,
    type: props.type,
    color: props.color,
  });

  const killMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    try {
      if (props.onClick) {
        props.onClick(event);
      }
    } catch (error) {
      console.error("Error calling onClick:", error);
    } finally {
      closeMenu();
    }
  };

  return (
    <>
      {props.type === "curved" ? (
        <div className="w-full p-2">
          <Component onClick={killMenu} {...props} />
        </div>
      ) : (
        <Component onClick={killMenu} {...props} />
      )}
    </>
  );
};

export default MenuItem;
MenuItem.displayName = getDisplayName("MenuItem");
