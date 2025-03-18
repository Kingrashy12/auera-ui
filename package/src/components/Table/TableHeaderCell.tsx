import { useTable } from "@/context/table";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { ThProps, tw } from "stywind";

const TableHeaderCell: React.FC<ThProps> = ({
  children,
  className,
  ...props
}) => {
  const { mode } = useTable();

  return (
    <th
      data-theme={mode}
      scope={props.scope || "col"}
      className={tw(
        "px-6 py-3 text-start font-inter text-xs font-medium text-gray-500 uppercase tone-dark:text-neutral-400",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export default TableHeaderCell;

TableHeaderCell.displayName = getDisplayName("TableHeaderCell");
