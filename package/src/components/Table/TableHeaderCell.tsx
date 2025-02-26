import React from "react";
import { ThProps, tw } from "stywind";

const TableHeaderCell: React.FC<ThProps> = ({
  children,
  className,
  ...props
}) => {
  // TODO: Add mode
  return (
    <th
      scope={props.scope || "col"}
      className={tw(
        "px-6 py-3 text-start font-inter text-xs font-medium text-gray-500 uppercase tone-dark:text-neutral-500",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export default TableHeaderCell;
