import React from "react";
import { BounceLoader, Spinner, WaveLoader } from "../loader";
import { LoaderProp } from "../../types/auera-ui";
import { ReturnError } from "@/utils";

const Loading: React.FC<LoaderProp> = ({
  isLoading,
  children,
  color,
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
    bounce: <BounceLoader color={color} size={size} />,
    spin: <Spinner color={color} size={size} />,
    wave: <WaveLoader color={color} size={size} />,
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          {spinner || comp[loader]}
        </div>
      ) : error ? (
        renderError
      ) : empty ? (
        emptyComponent
      ) : keepOut ? null : (
        children
      )}
    </>
  );
};

export default Loading;
Loading.displayName = "AueraUI.Loading";
