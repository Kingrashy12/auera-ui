import React from "react";
import { THeadProps, tw } from "stywind";

interface Head extends THeadProps {
  tint?: boolean;
}

const TableHead: React.FC<Head> = ({ children, tint, className, ...props }) => {
  // TODO: Add mode
  return (
    <thead
      className={tw(tint && "bg-gray-50 tone-dark:bg-neutral-800", className)}
      {...props}
    >
      {children}
    </thead>
  );
};

export default TableHead;
