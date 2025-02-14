import { getDisplayName } from "@/utils/displayname";
import { ColorPair } from "../../types/auera-system";
import { tw } from "stywind";
type LoaderProps = {
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  innerColor?: ColorPair;
};
const bounceSize = {
  sm: "w-6 h-6 border-2",
  md: "w-10 h-10 border-4",
  lg: "w-12 h-12 !border-[6px]",
};
const CircleLoader = ({
  size = "md",
  color = "blue-500",
  innerColor = "blue-100",
}: LoaderProps) => {
  const LoaderClass = tw(
    bounceSize[size],
    `border-t-${color}`,
    `border-${innerColor}`
  );
  return <div className={tw(LoaderClass, "rounded-full animate-spin")} />;
};

export default CircleLoader;

CircleLoader.displayName = getDisplayName("CircleLoader");
