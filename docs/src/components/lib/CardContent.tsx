import { Box, BoxWithMotion } from "auera-ui";
import React from "react";
import { tw } from "stywind";

const CardContent: React.FC<BoxWithMotion> = (props) => {
  return (
    <Box
      className={tw(
        "flex-col gap-[16px] p-[18px] bg-white overflow-x-hidden max-w-full theme-dark:bg-neutral-950/80 border-1.7 border-neutral-200 theme-dark:border-neutral-900 rounded-[10px]",
        props.className
      )}
      fullWidth
    >
      {props.children}
    </Box>
  );
};

export default CardContent;
