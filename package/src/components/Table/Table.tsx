import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { TableProps, tw } from "stywind";

interface Table extends TableProps {
  rounded?: boolean;
  bordered?: boolean;
  raised?: boolean;
  no_border?: boolean;
  classNames?: {
    table?: string;
    container?: string;
  };
}

const Table: React.FC<Table> = ({
  children,
  rounded,
  bordered,
  raised,
  classNames,
  className,
  no_border,
  ...props
}) => {
  // TODO: Add mode
  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div
            className={tw(
              "overflow-hidden",
              rounded && "rounded-xl",
              bordered && "border tone-dark:border-neutral-700",
              raised &&
                "shadow-card tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]",
              classNames?.container
            )}
          >
            <table
              className={tw(
                "min-w-full divide-y divide-gray-200 tone-dark:divide-neutral-700",
                no_border && "divide-y-0",
                classNames?.table,
                className
              )}
              {...props}
            >
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
Table.displayName = getDisplayName("Table");
