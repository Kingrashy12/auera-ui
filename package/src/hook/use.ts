import { DOCUMENT_ACTIVE, WINDOW_ACTIVE } from "@/utils";
import { DesignFlavour, ModeType } from "../types/auera-system";
import { useProvider } from "./provider";
import { useTheme } from "./useTheme";
import { useEffect, useState } from "react";

const useMode = (mode?: ModeType) => {
  const { mode: AppMode } = useTheme();
  const currentMode = mode ?? AppMode;

  return { currentMode };
};

const useFlavour = (flavour?: DesignFlavour) => {
  const { flavour: AppFlavour } = useProvider();
  const currentFlavour = flavour ?? AppFlavour;

  return { currentFlavour };
};

export { useMode, useFlavour };

export const useScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (DOCUMENT_ACTIVE) {
      const scrolled = document?.documentElement?.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    } else
      throw new Error(
        "Please switch your components to client-side rendering, as useScrollTop requires access to client-side APIs like `window` and `document`."
      );
  };

  const scrollToTop = () => {
    if (WINDOW_ACTIVE) {
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    if (WINDOW_ACTIVE) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (WINDOW_ACTIVE) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return { scrollToTop, visible };
};
