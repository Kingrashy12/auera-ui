import { useEffect, useRef, useState } from "react";
import { RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti";

import {
  ToastOptionsType,
  ToastPositionType,
  ToastType,
  ToastVariant,
} from "../../types/auera-ui";
import { generateId } from "@/utils/gen";
import { getToast } from "./style";
import { tw } from "stywind";
import { HiOutlineX } from "react-icons/hi";
import { PiSpinner } from "react-icons/pi";
import { colors } from "@/utils";
import { IconButton } from "../Button";
import Icon from "../Icon/Icon";

// Toast notification
type ToastNotification = {
  id: string;
  message: string;
  position?: ToastPositionType;
  className?: string;
  transition?: ToastOptionsType["transition"];
  type: ToastVariant;
  isVisible: boolean;
};

/** Toast API for displaying different types of toast notifications (info, error, success, warning, loading). */
let toast: ToastType;

const Toast = ({ className }: { className?: string }) => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const toastTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const { Header, CloseIcon, ContentWrap, Message, ClassName, ToastContent } =
    getToast();

  // Show toast
  const show = (newToast: ToastNotification, duration: number = 4000) => {
    setToasts((prevToasts) => {
      if (prevToasts.length === 0) {
        return [newToast];
      }

      const updatedToasts = prevToasts.map((t) =>
        t.id === newToast.id ? { ...t, ...newToast } : t
      );

      if (!updatedToasts.some((t) => t.id === newToast.id)) {
        updatedToasts.push(newToast);
      }

      return updatedToasts;
    });

    const update = (t: ToastNotification) => {
      if (t.type === "loading") {
        return { ...t, isVisible: true };
      } else return { ...t, isVisible: false };
    };

    const timeoutId = setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((t) =>
          t.id === newToast.id && t.type !== "loading" ? update(t) : t
        )
      );

      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((t) => t.id !== newToast.id || t.type === "loading")
        );
        delete toastTimeouts.current[newToast.id];
      }, 300);
    }, duration);
    // Store timeout ID
    toastTimeouts.current[newToast.id] = timeoutId;
  };

  // Remove toast
  const removeToast = (toast: ToastNotification) => {
    const update = (t: ToastNotification) => {
      return { ...t, isVisible: false };
    };
    setToasts((prev) => {
      const updatedToasts = prev.map((t) =>
        t.type !== "loading" ? update(t) : t
      );
      setTimeout(() => {
        updatedToasts.filter(
          (t) => toast.type === "loading" || t.id !== toast.id
        );
      }, 300);
      return updatedToasts;
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    const toastTime = toastTimeouts.current;
    return () => {
      Object.values(toastTime).forEach(clearTimeout);
    };
  }, []);

  // Get label
  const getLabel = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return "Information";
      case "error":
        return "Error";
      case "success":
        return "Success";
      case "warning":
        return "Warning";
      case "loading":
        return "Loading";
    }
  };

  // Get icon color
  const getIconColor = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return colors.blue[500];
      case "error":
        return colors.red[500];
      case "success":
        return colors.green[500];
      case "warning":
        return colors.yellow[500];
    }
  };

  // Get icon
  const getIcon = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return RiInformationFill;
      case "error":
        return RiErrorWarningFill;
      case "success":
        return FaCircleCheck;
      case "warning":
        return TiWarning;
      case "loading":
        return PiSpinner;
    }
  };

  // Toast API
  toast = {
    info: (msg: string, options?: ToastOptionsType) =>
      show({
        id: options?.key || generateId(11),
        message: msg,
        type: "info",
        position: options?.position || "top-right",
        ...options,
        isVisible: true,
      }),
    error: (msg: string, options?: ToastOptionsType) =>
      show({
        id: options?.key || generateId(11),
        message: msg,
        type: "error",
        position: options?.position || "top-right",
        ...options,
        isVisible: true,
      }),
    success: (msg: string, options?: ToastOptionsType) =>
      show({
        id: options?.key || generateId(11),
        message: msg,
        type: "success",
        position: options?.position || "top-right",
        ...options,
        isVisible: true,
      }),
    warning: (msg: string, options?: ToastOptionsType) =>
      show({
        id: options?.key || generateId(11),
        message: msg,
        type: "warning",
        position: options?.position || "top-right",
        ...options,
        isVisible: true,
      }),
    loading: (msg: string, options?: ToastOptionsType) =>
      show({
        id: options?.key || generateId(11),
        message: msg,
        type: "loading",
        position: options?.position || "top-right",
        ...options,
        isVisible: true,
      }),
  };

  const toastPosition: Record<ToastPositionType, string> = {
    "top-right": "top-[15px] right-[15px]",
    "top-left": "top-[15px] left-[15px]",
    "bottom-right": "bottom-[15px] right-[15px]",
    "bottom-left": "bottom-[15px] left-[15px]",
  };

  return (
    <>
      {Object.keys(toastPosition).map((pos) => (
        <div
          key={pos}
          className={tw(
            ClassName(pos as ToastPositionType).WrapClass,
            className
          )}
        >
          {toasts
            .filter((toast) => toast.position === pos)
            .map((toast) => (
              <div
                key={toast.id}
                className={tw(
                  ClassName(
                    toast.position || "top-right",
                    toast.isVisible,
                    toast.transition
                  ).ToastClass,
                  toast.className
                )}
              >
                <ContentWrap>
                  <Icon
                    icon={getIcon(toast.type)}
                    color={getIconColor(toast.type)}
                    size={20}
                    className={tw(toast.type === "loading" && "animate-spin")}
                  />
                  <ToastContent>
                    <Header>
                      {getLabel(toast.type)}
                      {toast.type === "loading" && (
                        <span className="animate-dots relative"></span>
                      )}
                    </Header>
                    <Message>{toast.message}</Message>
                  </ToastContent>
                </ContentWrap>
                <CloseIcon>
                  <IconButton
                    mode="light"
                    radius="xl"
                    onClick={() => removeToast(toast)}
                  >
                    <HiOutlineX size={20} color="black" />
                  </IconButton>
                </CloseIcon>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default Toast;
export { toast };
