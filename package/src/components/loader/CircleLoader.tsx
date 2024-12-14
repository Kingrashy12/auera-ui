import { tw } from "stywind";
type LoaderProps = {
  size?: "sm" | "md";
  color?: string;
  innerColor?: string;
};
const bounceSize = {
  sm: "w-6 h-6 border-2",
  md: "w-10 h-10 border-4",
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
  return <div className={tw(LoaderClass, "rounded-full animate-spin")}></div>;
};

export default CircleLoader;
