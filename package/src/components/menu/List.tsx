import { useMenu } from "../../hook/useMenu";
import React, { useEffect, useRef } from "react";
import { MenuProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import { useComputeContainer, useComputeMenu } from "./use-menu";

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  const { isOpen, onClose, mode } = useMenu();
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

  const List = useComputeMenu({
    className: props.className,
    zIndex: props.zIndex,
  });

  const Container = useComputeContainer({ open: isOpen, zIndex: props.zIndex });

  return (
    <Container ref={menuRef as any}>
      <List mode={mode}>{props.children}</List>
    </Container>
  );
};

Menu.displayName = getDisplayName("Menu");
