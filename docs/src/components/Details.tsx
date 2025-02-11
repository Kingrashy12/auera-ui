import { Box, BoxProps } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const Details = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      id={props.id}
      direction={props.direction || "column"}
      className={tw(props.className as string, "gap-4 px-3 max-[550px]:px-1")}
    >
      {children}
    </Box>
  );
};

export default Details;
