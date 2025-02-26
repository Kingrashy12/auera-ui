import { LoadIndicatorProps } from "@/types/utils";
import { useEffect, useState } from "react";
import { tw } from "stywind";

const LoadIndicator = ({ className, color }: LoadIndicatorProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 30);

    // Clear interval when progress reaches 100%
    if (progress >= 100) {
      clearInterval(progressInterval);
    }

    return () => clearInterval(progressInterval);
  }, [progress]);
  return (
    <div className="fixed w-full top-0 z-[500]">
      <div
        style={{ width: `${progress}%` }}
        className={tw(
          "h-[3px] rounded-r-md shadow",
          color ? `bg-${color}` : "bg-blue-500",
          className
        )}
      />
    </div>
  );
};

export default LoadIndicator;
LoadIndicator.displayName = "AueraUI.LoadIndicator";
