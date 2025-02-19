import React from "react";
import { BounceLoader, CircularProgress } from "../loader";
import { LoaderProp } from "../../types/auera-ui";
import { ReturnError } from "@/utils";

const Loading: React.FC<LoaderProp> = ({
  isLoading,
  children,
  color,
  innerColor,
  size,
  spinner,
  loader = "bounce",
  error,
  renderError,
  keepOut,
  empty,
  emptyComponent,
}) => {
  ReturnError.throw(
    Boolean(error && !renderError),
    "Cannot render an empty error node."
  );

  ReturnError.throw(
    Boolean(empty && !emptyComponent),
    "Missing emptyComponent. Please provide one."
  );

  const comp = {
    bounce: (
      <div className="flex items-center justify-center w-full">
        <BounceLoader color={color || "blue-500"} size={size || "md"} />
      </div>
    ),
    circle: (
      <div className="flex items-center justify-center w-full">
        <CircularProgress
          color={color || "blue-500"}
          innerColor={innerColor || "blue-100"}
          size={size || "md"}
        />
      </div>
    ),
  };

  return (
    <>
      {isLoading ? (
        <>{spinner ? spinner : <>{comp[loader]}</>}</>
      ) : error ? (
        renderError
      ) : !error && empty ? (
        emptyComponent
      ) : keepOut ? null : (
        children
      )}
    </>
  );
};

export default Loading;
Loading.displayName = "AueraUI.Loading";
