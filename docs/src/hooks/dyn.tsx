import { LazyImport } from "@/components/LazyImport";
import { LazyImportProps } from "@/types/ui";

export const dyn = (
  importFunc: LazyImportProps["importFunc"],
  loaderOptions?: LazyImportProps["loaderOptions"]
) => {
  const DynComponent = () => (
    <LazyImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );

  return DynComponent;
};
