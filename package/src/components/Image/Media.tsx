import React, { useEffect } from "react";
import { createStyle, tw } from "stywind";
import Skeleton from "../loader/Skeleton";
import { ButtonProps } from "@/types/auera-ui";
import { ReturnError } from "@/utils/error";

interface MediaProps extends React.ComponentProps<"img"> {
  fullWidth?: boolean;
  size?: number | string;
  radius?: ButtonProps["radius"];
  width: string | number;
  height: string | number;
}

const Media: React.FC<MediaProps> = ({
  fullWidth,
  size,
  radius = "sm",
  ...props
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const Image = createStyle("img").classname(
    tw(props.className, "rounded-full", fullWidth && "w-full")
  );

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    ReturnError.throw(
      !props.width || !props.height,
      "width and height is required, when using the Media component"
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

export default Media;
