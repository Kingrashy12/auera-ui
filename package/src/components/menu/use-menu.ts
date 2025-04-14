import { createStyle, tw } from "stywind";
import { item, ItemVariants, list, ListVariants } from "./menu-variant";
import { useMemo } from "react";
import { AueraDiv } from "@/core/AueraElement";

export const useComputeItem = (props: ItemVariants) => {
  const { disabled, className, color, useColorOnHover } = props;

  // TODO: Use `AueraDiv`
  const StyledItem = createStyle(AueraDiv);

  const styles = useMemo(
    () => tw(item({ color, disabled, useColorOnHover }), className),
    [className, color, disabled, useColorOnHover]
  );

  return StyledItem.classname(styles);
};

export const useComputeWrapper = (props: ListVariants) => {
  const { zIndex, className, showDivider, isVisible } = props;

  // TODO: Use `AueraDiv`
  const StyledIWrapper = createStyle(AueraDiv);

  const styles = useMemo(
    () => tw(list({ zIndex, showDivider, isVisible }), className),
    [className, zIndex, showDivider, isVisible]
  );

  return StyledIWrapper.classname(styles);
};
