import { LazyImport } from "@/components/LazyImport";
import { LazyImportProps } from "@/types/ui";
import { ComponentType } from "react";

export const dyn = <T,>(
  importFunc: LazyImportProps<T>["importFunc"],
  loaderOptions?: LazyImportProps<T>["loaderOptions"]
) => {
  const DynComponent: ComponentType<T> = () => (
    <LazyImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );

  return DynComponent;
};
