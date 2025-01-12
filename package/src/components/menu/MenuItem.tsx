import { useMenu } from "@/hook/useMenu";
import { MenuItemProps } from "../../types/auera-ui";
import React from "react";
import { useMode } from "@/hook/use";
import { getDisplayName } from "@/utils/displayname";
import { useComputeMI } from "./use-menu";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { currentMode } = useMode(props.mode);
  const { onClose: closeMenu } = useMenu();

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

  const Base = useComputeMI(props);

  return (
    <>
      {props.type === "curved" ? (
        <div className="w-full p-2">
          <Base onClick={killMenu} data-theme={currentMode} {...props} />
        </div>
      ) : (
        <Base onClick={killMenu} data-theme={currentMode} {...props} />
      )}
    </>
  );
};

export default MenuItem;
MenuItem.displayName = getDisplayName("MenuItem");
