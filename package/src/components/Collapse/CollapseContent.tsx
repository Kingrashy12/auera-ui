import { getDisplayName } from "@/utils/displayname";
import { Box, BoxWithMotion } from "auera-ui";
import React from "react";

const CollapseContent: React.FC<BoxWithMotion> = (props) => {
  return (
    <Box className="flex-col px-4 py-4" fullWidth {...props}>
      {props.children}
    </Box>
  );
};

export default CollapseContent;
CollapseContent.displayName = getDisplayName("CollapseContent");
