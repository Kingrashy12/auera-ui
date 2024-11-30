export type DesignFlavour =
  | "corporate" // Professional and clean enterprise designs
  | "frost" // Represents glassmorphism or frosted-glass effect
  | "neumorphic"; // Soft, 3D-style components with inner/outer shadows
// | "flat" // Clean, flat design without shadows
// | "retro" // Classic or vintage-themed designs
// | "creative"; // Playful, vibrant, or animated components

export type SchemeVariant = "primary" | "success" | "danger" | "warning";
export type ButtonVariant = "solid" | "flat" | "outline" | "light" | "ghost";

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
