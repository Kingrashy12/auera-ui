import { Box, BoxProps } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const Details = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      direction={props.direction || "column"}
      className={tw(props.className as string, "gap-2 px-3")}
    >
      {children}
    </Box>
  );
};

export default Details;
