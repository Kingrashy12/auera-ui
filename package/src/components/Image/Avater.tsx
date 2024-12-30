import React, { useEffect, useMemo } from "react";
import { createStyle, tw } from "stywind";
import Skeleton from "../loader/Skeleton";

interface AvatarProps extends React.ComponentProps<"img"> {
  size?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
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
  const [loaded, setLoaded] = React.useState(false);

  const imageSize = imgSizes[size];
  const placeholderSize = placeholderSizes[size];

  const Image = useMemo(() => {
    return createStyle("img").classname(
      tw(
        imageSize,
        "rounded-full",
        border &&
          "border-2 theme-dark:border-neutral-600 theme-light:border-neutral-200"
      )
    );
  }, [border, imageSize]);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        handleLoad();
      }, 3000);
    }
  }, [loaded]);

  return (
    <>
      {!loaded && (
        <Skeleton
          width={placeholderSize}
          height={placeholderSize}
          radius="full"
        />
      )}
      <Image
        onLoad={handleLoad}
        loading="lazy"
        alt={props.alt}
        className={tw(loaded ? "block" : "hidden", props.className)}
        {...props}
      />
    </>
  );
};

export default React.memo(Avatar);
