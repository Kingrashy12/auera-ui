import React from "react";
import { TFootProps } from "stywind";

const TableFooter: React.FC<TFootProps> = ({ children, ...props }) => {
  return <tfoot {...props}>{children}</tfoot>;
};

export default TableFooter;
TableFooter.displayName = "AueraUI.TableFooter";
