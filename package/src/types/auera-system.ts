import { colors } from "../utils";

export type DesignFlavour =
  | "corporate" // Professional and clean enterprise designs
  | "frost" // Represents glassmorphism or frosted-glass effect
  | "neumorphic"; // Soft, 3D-style components with inner/outer shadows
// | "flat" // Clean, flat design without shadows
// | "retro" // Classic or vintage-themed designs
// | "creative"; // Playful, vibrant, or animated components

export type SchemeVariant = "primary" | "success" | "danger" | "warning";
export type ButtonVariant =
  | "solid"
  | "flat"
  | "outline"
  | "light"
  | "ghost"
  | "unstyled";

export type ProviderProps = {
  flavour?: DesignFlavour;
  mode?: "light" | "dark";
  children: React.ReactNode;
};
type ContextAction = "create" | "use";

export type ContextType = {
  [key in ContextAction]: (value: unknown) => void;
};

export type ModeType = "light" | "dark";

// Get the top-level keys of `colors` (e.g., 'blue')
type Colors = keyof typeof colors;

// Get the keys of the nested objects (e.g., '100')
type ColorsPair = keyof (typeof colors)[Colors];

// Combine the two types into a string template (e.g., 'blue-100')
type Color = `${Colors}-${ColorsPair}`;

export type ColorPair = Color | "black" | "white";

export type ModalPanelSize = "auto" | "sm" | "md" | "lg" | "xl" | "full";
export type TransitionType = "walkIn" | "dropIn" | "slideIn";
export type Trigger = "modal" | "drawer";

export interface AueraElementProps {
  tag?: keyof JSX.IntrinsicElements;
  mode?: ModeType;
  className?: string;
  children?: React.ReactNode;
}
