import React, { useEffect } from "react";
import { tw } from "stywind";
import Skeleton from "../loader/Skeleton";
import { ButtonProps } from "@/types/auera-ui";
import { ReturnError } from "@/utils/error";
import { getDisplayName } from "@/utils/displayname";

type ImgProps = React.ComponentProps<"img">;

interface MediaProps extends ImgProps {
  fullWidth?: boolean;
  size?: number | string;
  radius?: ButtonProps["radius"];
  width: string | number;
  height: string | number;
  loaderClass?: string;
  loaderStyle?: React.CSSProperties;
}

const Media: React.FC<MediaProps> = ({
  fullWidth,
  size,
  radius = "none",
  ...props
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    ReturnError.throw(
      !props.width || !props.height,
      "width and height are required when using the Media component"
    );
  }, [props.width, props.height]);

  useEffect(() => {
    if (!loaded) {
      const timer = setTimeout(() => {
        handleLoad();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <>
      {!loaded && (
        <Skeleton
          width={props.width}
          fullWidth={fullWidth}
          height={props.height}
          radius={radius}
          className={props.loaderClass}
          style={props.loaderStyle}
        />
      )}
      <img
        onLoad={handleLoad}
        loading="lazy"
        className={tw(loaded ? "block" : "hidden", props.className)}
        {...props}
      />
    </>
  );
};

export default Media;
Media.displayName = getDisplayName("Media");
