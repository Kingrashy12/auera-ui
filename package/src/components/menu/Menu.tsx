import React, { useEffect, useRef } from "react";
import { useComputeWrapper } from "./use-menu";
import { tw } from "stywind";
import { useMenu } from "./Provider";
import { MenuProps } from "../../types/auera-ui";

const Menu: React.FC<MenuProps> = ({
  children,
  zIndex,
  className,
  showDivider,
  containerClassName,
}) => {
  const { isVisible, isOpen, onClose } = useMenu();
  const Wrapper = useComputeWrapper({
    zIndex,
    className,
    showDivider,
    isVisible,
  });
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

  return (
    <>
      <div
        className={tw(
          "absolute z-100",
          isOpen ? "flex" : "hidden",
          containerClassName
        )}
        ref={menuRef}
      >
        <Wrapper>{children}</Wrapper>
      </div>
    </>
  );
};

export default Menu;

Menu.displayName = "AueraUI.Menu";
