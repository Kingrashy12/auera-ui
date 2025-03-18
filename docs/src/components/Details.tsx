import { Box, BoxProps, StrFun } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const Details = ({ children, ...props }: BoxProps) => {
  const id = props.id ? StrFun.slugify(props.id) : "";
  return (
    <Box
      id={id}
      direction={props.direction || "column"}
      className={tw("gap-4 px-3 max-[550px]:px-1", props.className)}
    >
      {children}
    </Box>
  );
};

export default Details;
