import { useTable } from "@/context/table";
import { TableHeadProps } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { tw } from "stywind";

const TableHead: React.FC<TableHeadProps> = ({
  children,
  tint,
  className,
  ...props
}) => {
  const { mode } = useTable();

  return (
    <thead
      data-theme={mode}
      className={tw(tint && "bg-gray-50 tone-dark:bg-neutral-800", className)}
      {...props}
    >
      {children}
    </thead>
  );
};

export default TableHead;
TableHead.displayName = getDisplayName("TableHead");
