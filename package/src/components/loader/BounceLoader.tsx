import { getDisplayName } from "@/utils/displayname";
import { ColorPair } from "../../types/auera-system";
import { tw } from "stywind";

type BounceProps = {
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  className?: string;
};

const BounceLoader: React.FC<BounceProps> = ({
  size = "md",
  color = "blue-500",
  className,
}) => {
  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={tw(
            `animate-bounce rounded-full bg-${color}`,
            {
              "w-2 h-2": size === "sm",
              "w-3 h-3": size === "md",
              "w-4 h-4": size === "lg",
            },
            className
          )}
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
  );
};

export default BounceLoader;

BounceLoader.displayName = getDisplayName("BounceLoader");
