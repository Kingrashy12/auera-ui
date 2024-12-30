import { ModeType } from "@/types/auera-system";
import { ModalContentType } from "@/types/auera-ui";
import { useMemo } from "react";
import { createStyle, defineClass, merge, tw } from "stywind";
import { useDrawer as Drawer } from "../../hook/useDrawer";

export const useDrawer = {
  content: (props: ModalContentType) => {
    const Content = createStyle("div").classname(
      tw(
        props.className,
        "flex flex-col p-3 bg-drawer-content overflow-y-auto h-full m-[5px 0] gap-[16px]",
        props.centerContent && "items-center justify-center"
      )
    );

    return { Content };
  },
};

export const useComputeStyles = () => {
  const { isVisible } = Drawer();

  const panel = (
    position = "right",
    type = "sticky",
    currentMode: ModeType
  ) => {
    const stickyShared = defineClass(
      "max-[550px]:w-full max-[550px]:rounded-none"
    );
    const floatShared = defineClass(
      "max-[550px]:w-[98%] max-[550px]:rounded-[9px] border-solid max-[550px]:right-1 max-[550px]:left-1 rounded-lg h-[97%]"
    );

    const animateClass = {
      left: isVisible ? "animate-slideInLeft" : "animate-slideOutLeft",
      right: isVisible ? "animate-slideIn" : "animate-slideOut",
    };

    const drawerBackground = {
      light: defineClass("bg-white border border-neutral-200"),
      dark: tw(
        defineClass("bg-black border-neutral-800"),
        type === "float" ? "border-[1.33px]" : ""
      ),
    };
    const drawer = {
      float: {
        left: tw(floatShared, defineClass("top-2 left-3")),
        right: tw(floatShared, defineClass("top-2 right-3")),
      },
      sticky: {
        left: tw(
          stickyShared,
          defineClass("h-full left-0 top-0 bottom-0 border-r")
        ),
        right: tw(
          stickyShared,
          defineClass("top-0 bottom-0 right-0 h-full border-l")
        ),
      },
    };

    const Component = useMemo(() => {
      return createStyle("div").classname(
        tw(
          merge.single(animateClass, position),
          merge.single(drawerBackground, currentMode),
          merge.multi(drawer, type, position),
          defineClass(
            "flex flex-col fixed w-[450px] transition-all duration-300 ease-in-out max-[1024px]:w-[60%] max-[768px]:w-[80%]"
          )
        )
      );
    }, [isVisible]);

    return { Component };
  };
  return { panel };
};
