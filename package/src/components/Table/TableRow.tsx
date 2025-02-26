import React from "react";
import { TableRowProps, tw } from "stywind";

interface Row extends TableRowProps {
  vertical_line?: boolean;
  hoverable?: boolean;
}

const TableRow: React.FC<Row> = ({
  children,
  vertical_line,
  className,
  hoverable,
  ...props
}) => {
  return (
    <tr
      className={tw(
        vertical_line && "divide-x",
        hoverable && "hover:bg-neutral-100 tone-dark:hover:bg-neutral-700",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export default TableRow;
