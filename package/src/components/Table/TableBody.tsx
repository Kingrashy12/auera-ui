import React from "react";
import { TBodyProps, tw } from "stywind";

const TableBody: React.FC<TBodyProps> = ({ children, className, ...props }) => {
  // TODO: Add mode
  return (
    <tbody
      className={tw(
        "divide-y divide-gray-200 tone-dark:divide-neutral-700",
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
