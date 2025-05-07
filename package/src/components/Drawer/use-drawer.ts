import { useMemo } from "react";
import {
  content,
  DrawerContentVariants,
  DrawerFooterVariants,
  DrawerHeaderVariants,
  DrawerPanelVariants,
  footer,
  header,
  panel,
} from "./drawer-variants";
import { createStyle } from "stywind";
import { AueraDiv } from "@/core/AueraElement";

const useDrawerContent = (props: DrawerContentVariants) => {
  const { centerContent, className } = props;

  const StyledContent = createStyle("div");

  const contentStyles = useMemo(
    () => content({ centerContent, className }),
    [centerContent, className]
  );

  return useMemo(
    () => StyledContent.classname(contentStyles),
    [centerContent, className]
  );
};

const useDrawerHeader = (props: DrawerHeaderVariants) => {
  const { className, showBorder } = props;

  return useMemo(
    () => createStyle(AueraDiv).classname(header({ showBorder, className })),
    [className, showBorder]
  );
};

const useDrawerFooter = (props: DrawerFooterVariants) => {
  const { className, position, showBorder } = props;

  return useMemo(
    () =>
      createStyle(AueraDiv).classname(
        footer({ position, showBorder, className })
      ),
    [position, showBorder, className]
  );
};

const ComputePanel = (props: DrawerPanelVariants) => {
  const { className, position, type, isVisible } = props;

  return useMemo(
    () =>
      createStyle(AueraDiv).classname(
        panel({ position, type, isVisible, className })
      ),
    [position, type, isVisible, className]
  );
};

export { useDrawerContent, useDrawerFooter, useDrawerHeader, ComputePanel };
