import { LazyImport } from "@/components/utils/LazyImport";
import { LazyImportProps } from "@/types/utils";

export const dyn = (
  importFunc: LazyImportProps["importFunc"],
  loaderOptions?: LazyImportProps["loaderOptions"]
) => {
  const DynComponent = () => (
    <LazyImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );

  return DynComponent;
};
