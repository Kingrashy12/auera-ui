import { LazyImport } from "@/components/utils/LazyImport";
import { LazyImportProps } from "@/types/utils";

/**
 * This function lets you dynamically import a component. It uses `React.lazy()` with `Suspense` under the hood with a loading indicator
 *
 * Read more: [AueraUI Docs](https://aueraui.vercel.app/docs/utilities/dyn)
 */
export const dyn = <T extends {}>(
  importFunc: LazyImportProps<T>["importFunc"],
  loaderOptions?: LazyImportProps<T>["loaderOptions"]
) => {
  const DynComponent: React.ComponentType<T> = () => (
    <LazyImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );

  return DynComponent;
};
