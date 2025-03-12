import { useTable } from "@/context/table";
import { Row } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { tw } from "stywind";

const TableRow: React.FC<Row> = ({
  children,
  verticalLine,
  className,
  hoverable,
  ...props
}) => {
  const { mode } = useTable();

  return (
    <tr
      data-theme={mode}
      className={tw(
        verticalLine && "divide-x tone-dark:divide-neutral-800",
        hoverable && "hover:bg-neutral-100 tone-dark:hover:bg-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;

TableRow.displayName = getDisplayName("TableRow");
