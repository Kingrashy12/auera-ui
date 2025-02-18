import { ToastOptionsType, ToastPositionType } from "@/types/auera-ui";
import { DivProps } from "../../types/element-props";
import { createStyle, defineClass, merge, tw } from "stywind";

interface IStyleToast extends DivProps {
  position: ToastPositionType;
  isVisible: boolean;
  transition: ToastOptionsType["transition"];
}

const getToastTransition = (
  isVisible: boolean,
  transition: ToastOptionsType["transition"]
) => {
  switch (transition) {
    case "dropIn":
      return isVisible ? "animate-dropIn" : "animate-dropOut";
    case "popIn":
      return isVisible ? "animate-popIn" : "animate-popOut";
    case "slideIn":
      return isVisible ? "animate-slideIn" : "animate-slideOut";
    case "walkIn":
      return isVisible ? "animate-walkIn" : "animate-walkOut";
    default:
      return isVisible ? "animate-walkIn" : "animate-walkOut";
  }
};

const toastPosition = {
  "top-right": "top-[15px] right-[15px]",
  "top-left": "top-[15px] left-[15px]",
  "bottom-right": "bottom-[15px] right-[15px]",
  "bottom-left": "bottom-[15px] left-[15px]",
};

const getToast = () => {
  const basicClass = defineClass(
    "bg-white w-auto h-auto relative flex max-w-[400px] m-[9px] gap-[6px] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-[550px]:max-w-[90%] border border-neutral-200"
  );

  const Header = createStyle("div").classname(
    "font-semibold text-black leading-5 text-sm"
  );

  const Message = createStyle("span").classname(
    "font-medium text-neutral-600 text-sm leading-5 w-full font-inter"
  );

  const ContentWrap = createStyle("div").classname(
    "flex relative w-fit gap-2 p-3"
  );

  const ToastContent = createStyle("div").classname(
    "flex gap-[2px] w-[90%] flex-col"
  );

  const CloseIcon = createStyle("div").classname(
    "flex items-center justify-center p-1 h-auto transition-all rounded-tr-md rounded-br-md cursor-pointer"
  );

  const ClassName = (
    position: IStyleToast["position"],
    isVisible?: boolean,
    transition?: IStyleToast["transition"]
  ) => {
    const ToastClass = defineClass(
      tw(
        isVisible ? "opacity-100" : "opacity-0",
        getToastTransition(isVisible as boolean, transition),
        basicClass
      )
    );
    const WrapClass = defineClass(
      tw("fixed z-[1000]", merge.single(toastPosition, position))
    );

    return { ToastClass, WrapClass };
  };

  return {
    Header,
    Message,
    ContentWrap,
    ToastContent,
    CloseIcon,
    ClassName,
  };
};

export { getToast };
