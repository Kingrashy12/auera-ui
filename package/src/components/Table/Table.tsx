import { TableInterface } from "../../types/auera-ui";
import { getDisplayName } from "@/utils/displayname";
import React from "react";
import { tw } from "stywind";
import TableProvider from "./Provider";
import { useMode } from "@/hook/use";

const Table: React.FC<TableInterface> = ({
  children,
  rounded,
  bordered,
  raised,
  classNames,
  className,
  noBorder,
  mode,
  ...props
}) => {
  const { currentMode } = useMode(mode);

  return (
    <TableProvider mode={mode}>
      <div className="flex flex-col w-full">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div
              data-theme={currentMode}
              className={tw(
                "overflow-hidden",
                rounded && "rounded-xl",
                bordered && "border tone-dark:border-neutral-800",
                raised &&
                  "shadow-card tone-dark:shadow-[0_4px_8px_rgba(255,255,255,0.05)]",
                classNames?.container
              )}
            >
              <table
                data-theme={currentMode}
                className={tw(
                  "min-w-full divide-y divide-gray-200 bg-white tone-dark:bg-black tone-dark:divide-neutral-800",
                  noBorder && "divide-y-0",
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
    </TableProvider>
  );
};

export default Table;
Table.displayName = getDisplayName("Table");
