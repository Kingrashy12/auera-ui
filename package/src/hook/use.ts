import { DesignVariant, ModeType } from "../types/auera-system";
import { useProvider } from "./provider";
import { useTheme } from "./useTheme";
import { useEffect, useState } from "react";

const useMode = (mode?: ModeType) => {
  const { mode: AppMode } = useTheme();
  const currentMode = mode ?? AppMode;

  return { currentMode };
};

const useDesign = (flavour?: DesignVariant) => {
  const { design: AppDesign } = useProvider();
  const currentDesign = flavour ?? AppDesign;

  return { currentDesign };
};

export { useMode, useDesign };

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
