import { Box, BoxProps } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const Details = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      direction={props.direction || "column"}
      className={tw("gap-3 px-3", props.className as string)}
    >
      {children}
    </Box>
  );
};

export default Details;
