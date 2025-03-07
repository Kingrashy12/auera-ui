import React from "react";
import { tw } from "stywind";
import { Skeleton } from "../loader";
import { TextProps } from "../../types/auera-ui";

const Text: React.FC<TextProps> = ({
  variant = "body",
  className,
  children,
  isLoading,
  width,
  height,
  fullWidth,
  radius,
  as = "p",
  ...props
}) => {
  const variants = {
    heading: "text-2xl font-bold max-[550px]:text-xl",
    subheading: "text-lg font-semibold max-[550px]:text-base",
    body: "text-base font-medium max-[550px]:text-sm",
  };

  if (isLoading) {
    return (
      <Skeleton
        width={width}
        height={height}
        radius={radius}
        className={className}
      />
    );
  }

  const Component = as;

  return (
    <Component
      className={tw(
        "text-gray-900 theme-dark:text-neutral-100 font-inter",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
Text.displayName = "AueraUI.Text";
