import React from "react";
import { LazyImportProps } from "@/types/utils";
import LoadIndicator from "../loader/LoadIndicator";

export const LazyImport: React.FC<LazyImportProps<any>> = ({
  importFunc,
  loaderOptions,
}) => {
  const LazyComponent = React.lazy(importFunc);
  return (
    <React.Suspense fallback={<LoadIndicator {...loaderOptions} />}>
      <LazyComponent />
    </React.Suspense>
  );
};
