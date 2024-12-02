import { Box, IconButton } from "auera-ui";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Community = () => {
  return (
    <Box className="gap-3 items-center">
      <IconButton variants="ghost" radius="full">
        <IoSearchOutline size={19} />
      </IconButton>
      <IconButton variants="ghost" radius="full">
        <FaGithub size={19} />
      </IconButton>
    </Box>
  );
};

export default Community;
