import React, { useEffect, useRef } from "react";
import { useComputeWrapper } from "./use-menu";
import { tw } from "stywind";
import { MenuProps } from "../../types/auera-ui";
import { useMenu } from "@/hook/useMenu";
import { useMenuContainerRules, useMenuRules } from "@/hook/useStyleRules";

const Menu: React.FC<MenuProps> = ({
  children,
  zIndex,
  className,
  showDivider,
  containerClassName,
  ...props
}) => {
  const { isVisible, isOpen, onClose, mode } = useMenu();
  const Wrapper = useComputeWrapper({
    zIndex,
    className,
    showDivider,
    isVisible,
    id: props.id || "",
    mode,
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

  const { menuContainerClass } = useMenuContainerRules(
    containerClassName,
    props.id || ""
  );

  const { menuMode } = useMenuRules(className, props.id || "", mode);

  return (
    <>
      <div
        className={tw(
          "absolute z-100",
          isOpen ? "flex" : "hidden",
          menuContainerClass,
          containerClassName
        )}
        ref={menuRef}
      >
        <Wrapper mode={menuMode?.value || mode} {...props}>
          {children}
        </Wrapper>
      </div>
    </>
  );
};

export default Menu;

Menu.displayName = "AueraUI.Menu";
