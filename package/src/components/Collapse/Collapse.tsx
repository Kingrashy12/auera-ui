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

  const openVariant = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

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
              "font-medium text-base text-black tone-dark:text-white",
              classNames?.headerLabel
            )}
          >
            {headerLabel}
          </p>
          <Icon
            icon={getIcon() as React.ElementType}
            size={20}
            data-theme={currentMode}
            className={tw("tone-dark:text-white")}
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
        variants={openVariant}
        initial="closed"
        animate={visible ? "open" : "closed"}
        style={{ overflow: "hidden" }}
        className={tw(!open && "hidden")}
      >
        {children}
      </Box>
      {/* <Divider className={dividerClass} /> */}
    </Box>
  );
};

export default Collapse;
Collapse.displayName = getDisplayName("Collapse");
