import { github_url } from "@/constant/url";
import { Box, IconButton } from "auera-ui";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import Badge from "./Badge";

const Community = ({ className }: { className?: string }) => {
  return (
    <Box className={`gap-3 items-center ${className}`}>
      {/* <Badge show className="gap-1 rounded-full cursor-pointer">
        <p className="font-inter font-medium text-xs">Flavour</p>
        <IoIosArrowDown />
      </Badge> */}
      <IconButton variants="ghost" radius="full">
        <IoSearchOutline size={19} />
      </IconButton>
      <Link href={github_url} rel="noreferel" target="_blank">
        <IconButton variants="outline" radius="full">
          <FaGithub size={19} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Community;
