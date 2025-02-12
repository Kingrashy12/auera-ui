import React from "react";
import Box from "../Box/Box";
import { getDisplayName } from "@/utils/displayname";
import { BoxWithMotion } from "../../types/auera-motion";

type GroupMapType<T> = {
  /**
   * An array of data items to be grouped and rendered.
   */
  data: T[];

  /**
   * A function that renders each item in the data array.
   *
   * @param item - The current data item.
   * @param index - The index of the current data item in the array.
   * @returns React node representing the item.
   */
  renderItem: (item: T, index: number) => React.ReactNode;

  /**
   * An optional component to display when the data array is empty.
   */
  emptyListComponent?: React.ReactNode;

  /**
   * An optional CSS class name to apply to the outer container.
   */
  className?: string;

  /**
   * An optional CSS class name to apply to the data-mapping container.
   */
  dataMapClass?: string;

  /**
   * The direction (row or column) for the layout of the outer container.
   */
  direction?: "row" | "column";

  /**
   * The direction (row or column) for the layout of the data-mapping container.
   */
  dataMapdirection?: "row" | "column";

  /**
   * A function to extract a key from each data item for grouping purposes.
   *
   * @param item - The current data item.
   * @returns The extracted key, usually a string or number.
   */
  groupByKey: (item: T) => string | number;

  /**
   * Determines whether to show the key as a heading above each group.
   */
  showKeyOnHead?: boolean;

  /**
   * A function to render the group key, usually displayed as a heading.
   *
   * @param key - The key extracted from the data item.
   * @returns React node representing the key.
   */
  renderKey?: (key: string | number) => React.ReactNode;
};

/**
 * GroupMap component groups an array of data by a specified key and renders each group.
 *
 * @template T - The type of data items in the list.
 *
 * @param {Object} props - The props for the GroupMap component.
 * @param {T[]} props.data - An array of data items to be grouped and rendered.
 * @param {(item: T, index: number) => React.ReactNode} props.renderItem - Function to render each item.
 * @param {React.ReactNode} [props.emptyListComponent] - Optional component displayed when data is empty.
 * @param {string} [props.className] - Optional CSS class for the outer container.
 * @param {string} [props.dataMapClass] - Optional CSS class for the inner data container.
 * @param {"row" | "column"} [props.direction] - Layout direction (row or column) for the outer container.
 * @param {"row" | "column"} [props.dataMapdirection] - Layout direction (row or column) for the inner container.
 * @param {(item: T) => string | number} props.groupByKey - Function to extract the key for grouping.
 * @param {boolean} [props.showKeyOnHead] - Whether to display the key as a heading for each group.
 * @param {(key: string | number) => React.ReactNode} [props.renderKey] - Function to render the group key.
 *
 * @returns {JSX.Element} The rendered grouped list component.
 */

const GroupMap = <T,>({
  data,
  renderItem,
  groupByKey,
  showKeyOnHead,
  renderKey,
  emptyListComponent,
  dataMapClass,
  dataMapdirection = "column",
  className,
  direction = "column",
  ...props
}: GroupMapType<T> & BoxWithMotion) => {
  // Group data based on the extracted key
  const groupedData: Record<string, T[]> = {};

  data.forEach((item) => {
    // Extract key from each item
    const key = groupByKey(item);
    if (!groupedData[key]) {
      groupedData[key] = [];
    }
    groupedData[key].push(item);
  });

  const groupedArray = Object.entries(groupedData);

  return (
    <>
      {groupedArray.length >= 1
        ? groupedArray.map(([key, group]) => (
            <Box key={key} direction={direction} className={className}>
              {showKeyOnHead && renderKey ? renderKey(key) : null}
              <Box
                direction={dataMapdirection}
                className={dataMapClass}
                {...props}
              >
                {group.map(renderItem)}
              </Box>
            </Box>
          ))
        : emptyListComponent}
    </>
  );
};

export default GroupMap;
GroupMap.displayName = getDisplayName("GroupMap");
