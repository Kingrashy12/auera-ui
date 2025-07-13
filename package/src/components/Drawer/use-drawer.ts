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
import { createStyle, tw } from "stywind";
import { AueraDiv } from "@/core/AueraElement";
import { useDrawerPanelRules } from "@/hook/useStyleRules";

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

const ComputePanel = (props: DrawerPanelVariants & { id: string }) => {
  const { className, position, type, isVisible, id } = props;

  const { panelClassName } = useDrawerPanelRules(className, id, position, type);

  const PanelInterface = createStyle(AueraDiv);

  const panelStyles = useMemo(
    () => tw(panel({ position, type, isVisible }), panelClassName, className),
    [position, type, isVisible, panelClassName, className]
  );

  return useMemo(() => PanelInterface.classname(panelStyles), [panelStyles]);
};

export { useDrawerContent, useDrawerFooter, useDrawerHeader, ComputePanel };
