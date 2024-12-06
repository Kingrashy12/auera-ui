import { Box, BoxProps } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const GuideContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      direction="column"
      fullWidth
      className={tw("gap-4 mb-4", props.className)}
    >
      {children}
    </Box>
  );
};

export default GuideContainer;
