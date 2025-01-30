import { getDisplayName } from "@/utils/displayname";
import { ColorPair } from "../../types/auera-system";
import { defineClass, tw } from "@/utils";

type BounceProps = {
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
};
const bounceSize = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};
const BounceLoader = ({ size = "md", color = "blue-500" }: BounceProps) => {
  const Loader = defineClass(
    tw(bounceSize[size], "rounded-full animate-bounce", `bg-${color}`)
  );
  return (
    <div className="flex flex-row gap-2">
      <div className={Loader}></div>
      <div className={tw(Loader, "[animation-delay:-.3s]")}></div>
      <div className={tw(Loader, "[animation-delay:-.5s]")}></div>
    </div>
  );
};

export default BounceLoader;

BounceLoader.displayName = getDisplayName("BounceLoader");
