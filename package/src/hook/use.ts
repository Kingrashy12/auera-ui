import { DesignVariant, ModeType, ThemeVariant } from "../types/auera-system";
import { useProvider } from "./provider";
import { useTheme } from "./useTheme";
import { useEffect, useState } from "react";

const useMode = (mode?: ModeType) => {
  const { mode: AppMode } = useTheme();
  const currentMode = mode ?? AppMode;

  return { currentMode };
};

const useDesign = (design?: DesignVariant) => {
  const { design: AppDesign } = useProvider();
  const currentDesign = design ?? AppDesign;

  return { currentDesign };
};

const useThemeVariant = (variant?: ThemeVariant) => {
  const { themeVariant } = useTheme();
  const currentVariant = variant || themeVariant;
  return currentVariant;
};

export { useMode, useDesign, useThemeVariant };

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
