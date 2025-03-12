import { useTable } from "@/context/table";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { TableCellProps, tw } from "stywind";

const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  ...props
}) => {
  const { mode } = useTable();

  return (
    <td
      data-theme={mode}
      className={tw(
        "px-6 py-4 whitespace-nowrap font-inter text-sm font-medium text-gray-800 tone-dark:text-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export default TableCell;
TableCell.displayName = getDisplayName("TableCell");
