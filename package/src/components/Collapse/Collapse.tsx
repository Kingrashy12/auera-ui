import { CollapseProps } from "../../types/auera-ui";
import { getDisplayName } from "../../utils/displayname";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { tw } from "stywind";
import Box from "../Box/Box";
import Icon from "../Icon/Icon";
import { useMode } from "../../hook/use";

const Collapse: React.FC<CollapseProps> = ({
  children,
  mode,
  openIcon,
  closeIcon,
  classNames,
  headerLabel,
  renderHeader,
}) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { currentMode } = useMode(mode);

  const getIcon = () => {
    const icon = open ? IoIosArrowUp : IoIosArrowDown;
    const cIcon = open ? openIcon : closeIcon;

    return closeIcon && openIcon ? cIcon : icon;
  };

  const handleOpen = () => {
    if (!open) {
      setOpen(!open);
      setVisible(true);
    } else {
      setVisible(false);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  };

  const getHeader = () => {
    if (renderHeader) {
      return renderHeader(open);
    } else {
      return (
        <>
          <p
            data-theme={currentMode}
            className={tw(
              "font-medium text-base text-black tone-dark:text-white font-inter",
              classNames?.headerLabel
            )}
          >
            {headerLabel}
          </p>
          <Icon
            icon={getIcon() as React.ElementType}
            size={20}
            color={currentMode === "dark" ? "white" : "black"}
            className={tw(currentMode === "dark" ? "text-white" : "text-black")}
          />
        </>
      );
    }
  };

  return (
    <Box direction="column" className={tw("gap-4", classNames?.main)}>
      <Box
        className={tw(
          "items-center justify-between cursor-pointer",
          classNames?.header
        )}
        onClick={handleOpen}
      >
        {getHeader()}
      </Box>

      <Box
        style={{ overflow: "hidden" }}
        className={tw(
          !open && "hidden",
          visible
            ? "h-auto opacity-100 duration-500 animate-drop-in"
            : "h-0 opacity-0 duration-300 animate-drop-out"
        )}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Collapse;
Collapse.displayName = getDisplayName("Collapse");
