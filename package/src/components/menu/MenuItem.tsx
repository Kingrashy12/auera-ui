import { useMenu } from "@/hook/useMenu";
import { MenuItemProps } from "../../types/auera-ui";
import React from "react";
import { getDisplayName } from "@/utils/displayname";
import { useComputeItem } from "./use-menu";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, className, disabled, color, type, ...rest } = props;
  const { onClose } = useMenu();

  const Component = useComputeItem({
    className,
    disabled,
    type,
    color,
  });

  const killMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(event);
    }
    onClose();
    // try {
    // } catch (error) {
    //   console.error("Error calling onClick:", error);
    // } finally {
    //   onClose();
    // }
  };

  return (
    <>
      {props.type === "curved" ? (
        <div className="w-full p-2">
          <Component onClick={killMenu} {...rest}>
            {children}
          </Component>
        </div>
      ) : (
        <Component onClick={killMenu} {...rest}>
          {children}
        </Component>
      )}
    </>
  );
};

export default MenuItem;
MenuItem.displayName = getDisplayName("MenuItem");
