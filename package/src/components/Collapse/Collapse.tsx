import { CollapseProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { tw } from "stywind";
import Box from "../Box/Box";
import Icon from "../Icon/Icon";

const Collapse: React.FC<CollapseProps> = ({
  headerClass,
  className,
  header,
  children,
  mode,
  openIcon,
  closeIcon,
}) => {
  const [open, setOpen] = useState(false);

  const getIcon = () => {
    const icon = open ? IoIosArrowUp : IoIosArrowDown;
    const cIcon = open ? openIcon : closeIcon;

    return closeIcon && openIcon ? cIcon : icon;
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const openVariant = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <Box
      data-theme={mode}
      className={tw(
        "flex-col rounded-lg w-auto border border-neutral-300 rounded-b-lg tone-dark:border-neutral-700",
        className
      )}
    >
      <Box
        data-theme={mode}
        className={tw(
          "justify-between cursor-pointer px-4 py-4",
          open
            ? "rounded-t-lg border-b border-neutral-300 tone-dark:border-neutral-700"
            : "rounded-lg border-primary"
        )}
        onClick={handleOpen}
        centered
      >
        <h2 className={tw("font-medium text-base font-poppins", headerClass)}>
          {header}
        </h2>
        <Icon icon={getIcon() as React.ElementType} size={20} />
      </Box>
      <Box
        variants={openVariant}
        initial="closed"
        animate={open ? "open" : "closed"}
        style={{ overflow: "hidden" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Collapse;
Collapse.displayName = getDisplayName("Collapse");
