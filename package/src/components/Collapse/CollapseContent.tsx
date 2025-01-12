import { getDisplayName } from "@/utils/displayname";
import React from "react";
import Box from "../Box/Box";
import { BoxWithMotion } from "@/types/auera-motion";

const CollapseContent: React.FC<BoxWithMotion> = (props) => {
  return (
    <Box className="flex-col px-4 py-4" fullWidth {...props}>
      {props.children}
    </Box>
  );
};

export default CollapseContent;
CollapseContent.displayName = getDisplayName("CollapseContent");
