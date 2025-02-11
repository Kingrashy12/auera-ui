import { github_url } from "@/constant/url";
import { Box, IconButton } from "auera-ui";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Community = ({ className }: { className?: string }) => {
  return (
    <Box className={`gap-3 items-center ${className}`}>
      <IconButton variant="ghost" radius="full">
        <IoSearchOutline size={19} />
      </IconButton>

      <Link href={github_url} rel="noreferel" target="_blank">
        <IconButton variant="outline" radius="full">
          <FaGithub size={19} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Community;
