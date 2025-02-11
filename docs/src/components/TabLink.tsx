import Link from "next/link";
import React from "react";
import { tw } from "stywind";

interface TabLinkProps {
  to: string;
  label: string;
  className?: string;
}

const TabLink = ({ to, label, className }: TabLinkProps) => {
  const isExternal = to.startsWith("https://") || to.startsWith("http://");
  return (
    <Link
      href={to}
      target={isExternal ? "_blank" : undefined}
      className={tw(
        className,
        "text-primary text-base font-semibold font-inter-tight tracking-wide relative tblink"
      )}
    >
      {label}
    </Link>
  );
};

export default TabLink;
