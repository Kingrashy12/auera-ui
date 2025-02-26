import { tw } from "stywind";
import { ColorPair } from "../../types/auera-system";
import { getDisplayName } from "@/utils/displayname";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  color?: ColorPair;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "blue-500",
  className,
}) => {
  return (
    <div
      className={tw(
        `inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current
         border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]
        text-${color}`,
        {
          "w-6 h-6 border-2": size === "sm",
          "w-10 h-10 border-4": size === "md",
          "w-12 h-12 border-[6px]": size === "lg",
        },
        className
      )}
      role="status"
    ></div>
  );
};

export default Spinner;

Spinner.displayName = getDisplayName("Spinner");
