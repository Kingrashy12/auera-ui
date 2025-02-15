import { ButtonProps } from "../../types/auera-ui";
import { merge, tw } from "stywind";

interface SkeletonProps {
  className?: string;
  radius?: ButtonProps["radius"];
  fullWidth?: boolean;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

const rd = {
  none: "rounded-none",
  sm: "rounded-[4px]",
  md: "rounded-[6px]",
  lg: "rounded-[8px]",
  xl: "rounded-[12px]",
  full: "rounded-full",
};

const Skeleton: React.FC<SkeletonProps> = ({
  radius = "sm",
  className,
  width,
  height,
  style,
}) => {
  return (
    <div
      style={{ ...style, width, height }}
      className={tw("skeleton", merge.single(rd, radius), className)}
    />
  );
};

export default Skeleton;
