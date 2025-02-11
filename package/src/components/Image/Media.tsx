import React from "react";
import Skeleton from "../loader/Skeleton";
import { getDisplayName } from "@/utils/displayname";
import { motion } from "motion/react";
import { ImageWithMotion } from "../../types/auera-motion";

const Media: React.FC<ImageWithMotion> = ({
  fullWidth,
  radius = "none",
  ...props
}) => {
  return (
    <>
      {props.isLoading && (
        <Skeleton
          width={props.width}
          fullWidth={fullWidth}
          height={props.height}
          radius={radius}
          className={props.loaderClass}
          style={props.loaderStyle}
        />
      )}
      <motion.img className={props.className} {...props} />
    </>
  );
};

export default Media;
Media.displayName = getDisplayName("Media");
