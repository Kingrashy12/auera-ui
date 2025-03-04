import React from "react";
import { tw } from "stywind";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "heading" | "subheading" | "body";
}

const Text: React.FC<TextProps> = ({
  variant = "body",
  className,
  children,
  ...props
}) => {
  const variants = {
    heading: "text-2xl font-bold max-[550px]:text-xl",
    subheading: "text-lg font-semibold max-[550px]:text-base",
    body: "text-base font-medium max-[550px]:text-sm",
  };

  return (
    <p
      className={tw(
        "text-gray-900 theme-dark:text-neutral-100 font-inter",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
Text.displayName = "AueraUI.Text";
