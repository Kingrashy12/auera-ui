import { useTable } from "@/context/table";
import React from "react";
import { TBodyProps, tw } from "stywind";

const TableBody: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  const { mode } = useTable();

  return (
    <tbody
      data-theme={mode}
      className={tw(
        "divide-y divide-gray-200 tone-dark:divide-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
TableBody.displayName = "AueraUI.TableBody";
