import React, { useEffect } from "react";
import { tw } from "stywind";
import Skeleton from "../loader/Skeleton";
import { ButtonProps } from "@/types/auera-ui";
import { ReturnError } from "@/utils/error";
import { getDisplayName } from "@/utils/displayname";

type ImgProps = React.ComponentProps<"img">;
type VideoProps = React.ComponentProps<"video">;

interface BaseMediaProps {
  fullWidth?: boolean;
  size?: number | string;
  radius?: ButtonProps["radius"];
  width: string | number;
  height: string | number;
  loaderClass?: string;
  loaderStyle?: React.CSSProperties;
  as: "img" | "video";
}

type MediaProps = BaseMediaProps &
  (BaseMediaProps["as"] extends "img" ? ImgProps : VideoProps);

const Media: React.FC<MediaProps> = ({
  fullWidth,
  size,
  radius = "sm",
  as = "img",
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
  }, []);

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
          width={props.width}
          fullWidth={fullWidth}
          height={props.height}
          radius={radius}
          className={props.loaderClass}
          style={props.loaderStyle}
        />
      )}
      {React.createElement(
        as,
        {
          onLoad: as === "img" ? handleLoad : undefined,
          loading: as === "img" ? "lazy" : undefined,
          className: tw(loaded ? "block" : "hidden", props.className),
          ...props,
        },
        as === "video" ? props.children : null
      )}
    </>
  );
};

export default Media;
Media.displayName = getDisplayName("Media");
