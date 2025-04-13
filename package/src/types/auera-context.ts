export type ContextProviderProps = {
  children: React.ReactNode;
};

export type TabListContextType = {
  onSwitch: (value: string) => void;
  variant: "line" | "solid";
  activeTabValue: string;
  themeMode: "light" | "dark";
  fullWidth?: boolean;
  rounded: boolean;
};

export type TabsProviderType = {
  children: React.ReactNode;
  tabVariant: "line" | "solid";
  mode: "light" | "dark";
  useFullWidth?: boolean;
  useRounded: boolean;
};

export interface MenuContextProps {
  isOpen: boolean;
  isVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
  useColorOnHover?: boolean;
}
