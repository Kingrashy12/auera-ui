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

const useDrawerContent = (props: DrawerContentVariants) => {
  const { centerContent, className } = props;

  return useMemo(
    () => createStyle("div").classname(content({ centerContent, className })),
    [centerContent, className]
  );
};

const useDrawerHeader = (props: DrawerHeaderVariants) => {
  const { className, showBorder, mode } = props;

  return useMemo(
    () => createStyle("div").classname(header({ mode, showBorder, className })),
    [mode, className, showBorder]
  );
};

const useDrawerFooter = (props: DrawerFooterVariants) => {
  const { className, position, mode, showBorder } = props;

  return useMemo(
    () =>
      createStyle("div").classname(
        footer({ position, mode, showBorder, className })
      ),
    [position, mode, showBorder, className]
  );
};

const ComputePanel = (props: DrawerPanelVariants) => {
  const { className, position, type, mode, isVisible } = props;

  return useMemo(
    () =>
      createStyle("div").classname(
        panel({ position, type, mode, isVisible, className })
      ),
    [position, type, mode, isVisible, className]
  );
};

export { useDrawerContent, useDrawerFooter, useDrawerHeader, ComputePanel };
