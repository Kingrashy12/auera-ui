import {
  DesignFlavour,
  ModalPanelSize,
  ModeType,
  TransitionType,
} from "@/types/auera-system";
import { ModalContentType, ModalPanelType } from "@/types/auera-ui";
import { useMemo } from "react";
import { createStyle, defineClass, merge, tw } from "stywind";

export const useModal = {
  content: (props: ModalContentType) => {
    const Base = createStyle("div").classname(
      tw(
        props.className,
        "flex flex-col p-3 bg-drawer-content overflow-y-auto h-full m-[5px 0] gap-[16px]",
        props.centerContent ? "items-center justify-center" : ""
      )
    );

    return { Base };
  },
};

export const useComputeStyles = {
  panel: (
    isVisible: boolean,
    align: ModalPanelType["align"],
    currentMode: ModeType,
    transition: TransitionType,
    size: ModalPanelSize,
    flavour: DesignFlavour
  ) => {
    const sizes = {
      auto: defineClass("w-auto max-[550px]:w-[95%]"),
      sm: defineClass("w-[300px] max-[550px]:w-[95%]"),
      md: defineClass("w-[400px] max-[550px]:w-[95%]"),
      lg: defineClass("w-[500px] max-[550px]:w-[95%]"),
      xl: defineClass("w-[600px] max-[550px]:w-[95%]"),
      full: defineClass("w-10/12 max-[550px]:w-[95%]"),
    };

    const animate = {
      slideIn: isVisible ? "animate-slideIn" : "animate-slideOut",
      walkIn: isVisible ? "animate-walkIn" : "animate-walkOut",
      dropIn: isVisible ? "animate-dropIn" : "animate-dropOut",
    };

    const flavourStyle = {
      light: {
        neumorphic: defineClass("shadow-neumorphic-outline"),
        frost: defineClass("shadow-frost-outline"),
        corporate: defineClass("shadow-card-shadow-light"),
      },
      dark: {
        neumorphic: defineClass("shadow-neumorphic-modal-dark"),
        frost: defineClass("shadow-frost-modal-dark"),
        corporate: defineClass("shadow-card-shadow-dark"),
      },
    };

    const Mode = {
      light: defineClass("border border-neutral-200 bg-white"),
      dark: defineClass("border border-neutral-800 bg-black"),
    };

    const defualtStyle = defineClass(
      "max-w-full max-h-[95%] h-auto rounded-[11px] relative z-[800] overflow-hidden gap-[10px]"
    );

    const Panel = useMemo(() => {
      return createStyle("div").classname(
        tw(
          defualtStyle,
          merge.single(sizes, size),
          merge.single(Mode, currentMode),
          merge.single(animate, transition),
          align === "vertical" ? "flex-col" : "flex-row",
          merge.multi(flavourStyle, currentMode, flavour)
        )
      );
    }, [isVisible]);

    return { Panel };
  },
};
