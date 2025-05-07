import { storageActions } from "@/hook/useStorage";
import { ModeType, ThemeVariant } from "@/types/auera-system";

class ThemeManager {
  private static THEME_KEY = "AUERA_UI_THEME";
  private static SYSTEM_THEME_KEY = "AUERA_UI_THEME_IS_SYSTEM";
  private static THEME_VARIANT_KEY = "AUERA_UI_THEME_VARIANT";

  static getTheme() {
    const theme = storageActions.get(this.THEME_KEY);
    return theme && (theme as ModeType) ? (theme as ModeType) : null;
  }

  static setTheme(theme: ModeType): void {
    storageActions.set(this.THEME_KEY, theme);
  }

  // Get the system preference (whether the system uses dark/light)
  static getSystem(): boolean {
    const systemPreference = storageActions.get(this.SYSTEM_THEME_KEY);
    return systemPreference === "true";
  }

  // Set the system preference (whether to follow the system theme)
  static setSystem(isSystem: boolean): void {
    storageActions.set(this.SYSTEM_THEME_KEY, String(isSystem));
  }

  static getThemeVariant() {
    const variant = storageActions.get(this.THEME_VARIANT_KEY);
    return variant && (variant as ThemeVariant)
      ? (variant as ThemeVariant)
      : null;
  }

  static setThemeVariant(variant: ThemeVariant) {
    storageActions.set(this.THEME_VARIANT_KEY, variant);
  }

  static getPreferedTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  static clear(): void {
    storageActions.remove(this.THEME_KEY);
    storageActions.remove(this.SYSTEM_THEME_KEY);
    storageActions.remove(this.THEME_VARIANT_KEY);
  }
}

export default ThemeManager;
