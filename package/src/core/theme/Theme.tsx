import {
  InjectThemeProps,
  ModeType,
  ThemeColors,
  ThemePaletteSet,
  ThemeVariant,
} from "../../types/auera-system";
import { useEffect } from "react";

const themePalette: ThemePaletteSet<ModeType, ThemeVariant, ThemeColors> = {
  dark: {
    corporate: {
      background: "#000000",
      sidebar: "#000000",
      modal: "#000000",
      border: "#262626 ",
      hover: "#171717",
      input: "#171717",
      shadow: "rgb(23 23 23 / 0.8)",
      text: "#FFFFFF",
      content: "#0a0a0a",
      bg_btn: "#171717",
      border_btn: "#404040",
      hover_btn: "#262626",
      shadow_btn: "#171717",
    },
    obsidian: {
      background: "#0c0d0e",
      sidebar: "#111113",
      modal: "#111113",
      border: "#404040",
      hover: "#262626",
      input: "#171717",
      shadow: "black",
      text: "#FFFFFF",
      content: "#171717",
      bg_btn: "rgb(63 63 70 / 0.5)",
      border_btn: "#52525b",
      hover_btn: "rgb(63 63 70 / 0.8)",
      shadow_btn: "#000",
    },
  },
  light: {
    corporate: {
      background: "#FFFFFF",
      sidebar: "#fff",
      modal: "#FFFFFF",
      border: "#e5e5e5",
      hover: "#F3F4F6",
      input: "#fff",
      shadow: "#e5e7eb",
      text: "#111827",
      content: "#ffffff",
      bg_btn: "#ffff",
      hover_btn: "#f3f4f6",
      border_btn: "#d1d5db",
      shadow_btn: "#e5e5e5",
    },
    obsidian: {
      background: "#FCFCFD",
      sidebar: "#FFFFFF",
      modal: "#FFFFFF",
      border: "#e5e5e5",
      hover: "#e5e5e5",
      input: "#FFFFFF",
      shadow: "#d1d5db",
      text: "#1F2937",
      content: "#ffffff",
      bg_btn: "#ffffff",
      hover_btn: "#f5f5f5",
      border_btn: "#d4d4d4",
      shadow_btn: "#e5e5e5",
    },
  },
};

function InjectTheme({ variant, mode }: InjectThemeProps) {
  useEffect(() => {
    const theme = getThemeColors(mode, variant);

    const root = document.documentElement;

    root.style.setProperty("--auera-background", theme.background);
    root.style.setProperty("--auera-sidebar", theme.sidebar);
    root.style.setProperty("--auera-modal", theme.modal);
    root.style.setProperty("--auera-border", theme.border);
    root.style.setProperty("--auera-hover", theme.hover);
    root.style.setProperty("--auera-input", theme.input);
    root.style.setProperty("--auera-shadow", theme.shadow);
    root.style.setProperty("--auera-text", theme.text);
    root.style.setProperty("--auera-content", theme.content);
    root.style.setProperty("--auera-bg-btn", theme.bg_btn);
    root.style.setProperty("--auera-btn-border", theme.border_btn);
    root.style.setProperty("--auera-btn-hover", theme.hover_btn);
    root.style.setProperty("--auera-btn-shadow", theme.shadow_btn);
  }, [variant, mode]);

  return null;
}

function getThemeColors(mode: ModeType, variant: ThemeVariant): ThemeColors {
  return themePalette[mode][variant];
}

export { InjectTheme, getThemeColors };
