import { useMemo } from "react";
import {
  container,
  ContainerVariants,
  item,
  ItemVariants,
  list,
  ListVariants,
} from "./menu-variants";
import { createStyle, tw } from "stywind";
import { AueraDiv } from "@/core/AueraElement";

const useComputeMenu = (props: ListVariants) => {
  const { className, zIndex } = props;

  return useMemo(
    () => createStyle(AueraDiv).classname(tw(list({ zIndex }), className)),
    [className, zIndex]
  );
};

const useComputeItem = (props: ItemVariants) => {
  const { className, type, disabled, color } = props;

  return useMemo(
    () =>
      createStyle(AueraDiv).classname(
        tw(item({ disabled, type, color }), className)
      ),
    [className, disabled, type, color]
  );
};

const useComputeContainer = (props: ContainerVariants) => {
  const { open, zIndex } = props;

  return useMemo(
    () => createStyle("div").classname(container({ open, zIndex })),
    [open, zIndex]
  );
};

export { useComputeMenu, useComputeItem, useComputeContainer };
