// import { sb } from "@/constant/url";
import { Box, DrawerTrigger } from "auera-ui";
import Link from "next/link";
import React from "react";
import { tw } from "stywind";

const NavLinks = ({
  direction,
  className,
}: {
  direction?: "row" | "column";
  className?: string;
}) => {
  return (
    <Box direction={direction} className={tw("gap-3", className as string)}>
      <LinkItem label="Docs" link="/docs/getting-started/quick-start" />
      <LinkItem label="Components" link="/docs/components/overview" />
      {/* <LinkItem label="Storybook" ex link={sb} /> */}
    </Box>
  );
};

export default NavLinks;

const LinkItem = ({
  link,
  label,
  ex,
}: {
  link: string;
  label: string;
  ex?: boolean;
}) => {
  return (
    <Link href={link} target={ex ? "_blank" : ""} rel="noreferel">
      <DrawerTrigger value="" type="close">
        <p className="font-inter font-medium hover:text-blue-600 text-sm text-primary nav-hover">
          {label}
        </p>
      </DrawerTrigger>
    </Link>
  );
};
