import { storyBookPath } from "@/constant/url";
import { Box } from "auera-ui";
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
      <LinkItem label="Docs" link="/docs" />
      <LinkItem label="Components" link="/docs/components" />
      <LinkItem label="Storybook" ex link={storyBookPath} />
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
      <p className="font-inter-tight font-medium hover:text-blue-600 text-base text-text-color">
        {label}
      </p>
    </Link>
  );
};
