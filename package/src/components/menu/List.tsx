import { useMenu } from "../../hook/useMenu";

import React, { useEffect, useRef } from "react";
import { useComputeMenu } from "./use-menu";
import { MenuProps } from "../../types/auera-ui";
import { useMode } from "@/hook/use";
import { getDisplayName } from "@/utils/displayname";

export const List: React.FC<MenuProps> = ({ ...props }) => {
  const { isOpen, onClose } = useMenu();
  const { currentMode } = useMode(props.mode);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const { MenuAui, MenuPanel } = useComputeMenu({ open: isOpen, ...props });

  return (
    <MenuPanel open={isOpen} ref={menuRef}>
      <MenuAui data-theme={currentMode}>{props.children}</MenuAui>
    </MenuPanel>
  );
};

List.displayName = getDisplayName("Menu");
