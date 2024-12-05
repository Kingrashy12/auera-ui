import React from "react";
import { createStyle } from "stywind";

const TableOfContent = () => {
  const Table = createStyle("aside").classname(
    "h-[90vh] sticky bg-sidebar border-l border-l-sidebar px-3 py-2 top-16 overflow-y-auto z-20 w-[250px] flex-shrink-0 p-8 max-lg:hidden"
  );
  return <Table>TableOfContent</Table>;
};

export default TableOfContent;
