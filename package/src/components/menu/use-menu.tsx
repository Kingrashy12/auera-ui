import { zIndexKeys } from "@/utils/keys";
import { MenuItemProps, MenuProps } from "../../types/auera-ui";
import { useMemo } from "react";
import { createStyle, defineClass, tw } from "stywind";

export const useComputeMenu = (props: MenuProps) => {
  const MenuPanel = useMemo(() => {
    return createStyle("div").classname(
      tw(
        "absolute h-auto w-full",
        props.open ? "flex" : "hidden",
        zIndexKeys[props.zIndex || "100"]
      )
    );
  }, [props.open, props.zIndex]);

  const MenuAui = useMemo(() => {
    const base = defineClass(
      "w-auto max-w-[20rem] h-auto rounded-xl border tone-dark:border-neutral-800 border-neutral-200\
       flex flex-col gap-1 transition-transform duration-300 flex-shrink-0 animate-walkIn bg-white tone-dark:bg-neutral-950"
    );
    return createStyle("div").classname(
      tw(props.className, base, zIndexKeys[props.zIndex || "100"])
    );
  }, [props.zIndex, props.className]);

  return { MenuPanel, MenuAui };
};

export const useComputeMI = (props: MenuItemProps) => {
  const WideMenu = useMemo(() => {
    const disabledClass = defineClass(
      "cursor-not-allowed opacity-75 pointer-events-none"
    );

    const base = defineClass(
      "transition-transform duration-300 flex items-center p-[0.62rem]\
       cursor-pointer gap-1 hover:bg-gray-100 active:scale-90\
     tone-dark:hover:bg-neutral-800 font-medium select-none text-sm leading-5"
    );
    return createStyle("div").classname(
      tw(
        base,
        props.className,
        props.color
          ? `text-${props.color}`
          : "text-neutral-900 tone-dark:text-neutral-50",
        props.disabled && disabledClass,
        props.type === "curved" && "rounded-md"
      )
    );
  }, [props.className, props.color, props.disabled, props.type]);

  return WideMenu;
};
