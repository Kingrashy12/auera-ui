import React from "react";
import Skeleton from "../loader/Skeleton";
import { getDisplayName } from "@/utils/displayname";
import { tw } from "stywind";

interface AvatarProps extends React.ComponentProps<"img"> {
  size?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  lazy?: boolean;
  isLoading?: boolean;
}

const imgSizes = {
  sm: "w-[32px] h-[32px]",
  md: "w-[48px] h-[48px]",
  lg: "w-[64px] h-[64px]",
  xl: "w-[96px] h-[96px]",
};

const placeholderSizes = {
  sm: "32px",
  md: "48px",
  lg: "64px",
  xl: "96px",
};

const Avatar: React.FC<AvatarProps> = ({ size = "sm", border, ...props }) => {
  const imageSize = imgSizes[size];
  const placeholderSize = placeholderSizes[size];

  return (
    <>
      {props.isLoading && (
        <Skeleton
          width={placeholderSize}
          height={placeholderSize}
          radius="full"
        />
      )}
      {!props.isLoading && (
        <img
          alt={props.alt}
          className={tw(
            imageSize,
            "rounded-full",
            border &&
              "border-2 theme-dark:border-neutral-600 theme-light:border-neutral-200",
            props.className
          )}
          {...props}
        />
      )}
    </>
  );
};

export default Avatar;

Avatar.displayName = getDisplayName("Avatar");
