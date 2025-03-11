import React from "react";

interface ForProps<T> {
  each: T[];
  render: (item: T, index: number) => React.ReactNode;
}

const For = <T,>({ each, render }: ForProps<T>) => {
  return (
    <>
      {each.map((item, index) => (
        <React.Fragment key={index}>{render(item, index)}</React.Fragment>
      ))}
    </>
  );
};

export default For;
