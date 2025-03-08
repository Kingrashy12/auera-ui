import React from "react";
import Skeleton from "../loader/Skeleton";
import { getDisplayName } from "@/utils/displayname";
import { motion } from "motion/react";
import { ImageWithMotion } from "../../types/auera-motion";

const Image: React.FC<ImageWithMotion> = ({
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
        <motion.img className={props.className} {...props} loading="lazy" />
      )}
    </>
  );
};

export default Image;
Image.displayName = getDisplayName("Image");
