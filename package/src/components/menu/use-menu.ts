import { createStyle, tw } from "stywind";
import { item, ItemVariants, list, ListVariants } from "./menu-variant";
import { useMemo } from "react";
import { AueraDiv } from "@/core/AueraElement";
import { useMenuItemRules, useMenuRules } from "@/hook/useStyleRules";

export const useComputeItem = (props: ItemVariants & { id: string }) => {
  const { disabled, className, color, useColorOnHover, id } = props;

  const StyledItem = createStyle(AueraDiv);

  const { menuItemClass } = useMenuItemRules(className, id);

  const styles = useMemo(
    () =>
      tw(item({ color, disabled, useColorOnHover }), menuItemClass, className),
    [className, color, disabled, useColorOnHover, menuItemClass]
  );

  return StyledItem.classname(styles);
};

export const useComputeWrapper = (
  props: ListVariants & { id: string; mode: string }
) => {
  const { zIndex, className, showDivider, isVisible, id, mode } = props;

  const StyledIWrapper = createStyle(AueraDiv);

  const { menuClass } = useMenuRules(className, id, mode);

  const styles = useMemo(
    () => tw(list({ zIndex, showDivider, isVisible }), menuClass, className),
    [className, zIndex, showDivider, isVisible, menuClass]
  );

  return StyledIWrapper.classname(styles);
};
