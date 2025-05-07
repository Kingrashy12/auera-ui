import { Box, BoxWithMotion } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const CardContent: React.FC<BoxWithMotion> = (props) => {
  return (
    <Box
      className={tw(
        "flex-col gap-[16px] p-[18px] bg-content  overflow-x-hidden max-w-full shadow-shadow shadow-sm border-1.9 border-border rounded-[10px]",
        props.className
      )}
      fullWidth
    >
      {props.children}
    </Box>
  );
};

export default CardContent;
