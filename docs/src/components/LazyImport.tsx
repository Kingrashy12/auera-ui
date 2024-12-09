import { LazyImportProps } from "@/types/ui";
import React from "react";
import LoadIndicator from "./LoadIndicator";

export const LazyImport: React.FC<LazyImportProps> = ({
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
