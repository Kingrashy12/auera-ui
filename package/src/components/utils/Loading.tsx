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
    "Can't render an empty error node"
  );

  ReturnError.throw(
    Boolean(empty && !emptyComponent),
    "Please provide the emptyComponent"
  );

  const comp = {
    bounce: <BounceLoader color={color || "blue-500"} size={size || "md"} />,
    circle: (
      <CircularProgress
        color={color || "blue-500"}
        innerColor={innerColor || "blue-100"}
        size={size || "md"}
      />
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
