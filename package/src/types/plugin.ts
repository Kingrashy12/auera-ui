export interface AueraPlugin {
  Tailwind: {
    addVariant: (key: string, data: string) => void;
  };
}
