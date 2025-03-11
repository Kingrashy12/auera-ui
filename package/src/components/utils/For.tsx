import React from "react";

interface ForProps<T> {
  /** The array of items to iterate over */
  each: T[];
  /** A function that renders each item in the list */
  render: (item: T, index: number) => React.ReactNode;
  /** Optional component to display when the list is empty */
  emptyListComponent?: React.ReactNode;
}

/**
 * A reusable component for mapping over an array and rendering elements.
 *
 * @template T - The type of items in the list
 * @param {ForProps<T>} props - The props for the component
 * @returns {JSX.Element} The rendered list or an empty component if no items exist
 */
const For = <T,>({
  each,
  render,
  emptyListComponent,
}: ForProps<T>): JSX.Element => {
  return (
    <>
      {each.length > 0
        ? each.map((item, index) => (
            <React.Fragment key={index}>{render(item, index)}</React.Fragment>
          ))
        : emptyListComponent ?? null}
    </>
  );
};

export default For;
For.displayName = "AueraUI.For";
