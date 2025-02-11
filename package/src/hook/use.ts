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
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollToTop, visible };
};
