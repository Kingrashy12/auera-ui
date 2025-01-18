import React from "react";
import { tw } from "stywind";
import Box from "../Box/Box";
import { getDisplayName } from "@/utils/displayname";
import { BoxWithMotion } from "../../types/auera-motion";

type ListMap<T> = {
  /** An array of data items to be rendered. */
  data: T[];

  /** Function to render each item in the list. */
  renderItem: (item: T, index: number) => React.ReactNode;

  /** Optional component displayed when the data array is empty. */
  emptyListComponent?: React.ReactNode;

  /** Optional CSS class for the container. */
  className?: string;

  /** Layout direction (row or column) for the container. */
  direction?: "row" | "column";
} & BoxWithMotion;

/**
 * MapItems component displays a list of items with customizable rendering and layout.
 *
 * @template T - The type of data items in the list.
 *
 * @param {Object} props - The props for the MapItems component.
 * @param {T[]} props.data - An array of data items to be rendered.
 * @param {(item: T, index: number) => React.ReactNode} props.renderItem - Function to render each item in the list.
 * @param {React.ReactNode} [props.emptyListComponent] - Optional component displayed when the data array is empty.
 * @param {string} [props.className] - Optional CSS class for the container.
 * @param {"row" | "column"} [props.direction] - Layout direction (row or column) for the container.
 *
 * @returns {JSX.Element} The rendered list of items or the empty state component.
 */

const MapItems = <T,>(
  {
    data,
    renderItem,
    emptyListComponent,
    className,
    direction,
    animate,
    variants,
    initial,
    ...props
  }: ListMap<T>,
  ref?: React.Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <Box
      ref={ref}
      direction={direction}
      className={tw("gap-2", className)}
      animate={animate}
      variants={variants}
      initial={initial}
      {...props}
    >
      {data && data.length >= 1 ? data.map(renderItem) : emptyListComponent}
    </Box>
  );
};

export default MapItems;
MapItems.displayName = getDisplayName("MapItems");
