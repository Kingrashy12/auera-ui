import { DesignFlavour, ModeType } from "../types/auera-system";
import { useProvider } from "./provider";
import { useTheme } from "./useTheme";

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
