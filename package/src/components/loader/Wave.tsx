import { ColorPair } from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";
import { tw } from "stywind";

type Wave = {
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  className?: string;
};

const WaveLoader: React.FC<Wave> = ({
  color = "blue-500",
  size = "sm",
  className,
}) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={tw(
            `bg-${color} animate-wave`,
            {
              "w-1 h-5": size === "sm",
              "w-[5px] h-5": size === "md",
              "w-2 h-6": size === "lg",
            },
            className
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveLoader;

WaveLoader.displayName = getDisplayName("WaveLoader");
