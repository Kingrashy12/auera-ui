import React from "react";
import Skeleton from "../loader/Skeleton";
import { getDisplayName } from "@/utils/displayname";
import { ImageProps } from "../../types/auera-ui";

const Image: React.FC<ImageProps> = ({
  fullWidth,
  radius = "none",
  isLoading,
  ...props
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          width={props.width}
          fullWidth={fullWidth}
          height={props.height}
          radius={radius}
          className={props.className}
          style={props.styles}
        />
      ) : (
        <img className={props.className} {...props} loading="lazy" />
      )}
    </>
  );
};

export default Image;
Image.displayName = getDisplayName("Image");
