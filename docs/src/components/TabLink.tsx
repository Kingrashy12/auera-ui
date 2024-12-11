import Link from "next/link";
import React from "react";
import { tw } from "stywind";

interface TabLinkProps {
  to: string;
  label: string;
  className?: string;
}

const TabLink = ({ to, label, className }: TabLinkProps) => {
  return (
    <Link
      href={to}
      className={tw(
        className as string,
        "text-primary text-base font-semibold font-inter-tight tracking-wide relative tblink"
      )}
    >
      {label}
    </Link>
  );
};

export default TabLink;
