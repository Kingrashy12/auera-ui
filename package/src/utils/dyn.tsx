import { LazyImport } from "@/components/utils/LazyImport";
import { LazyImportProps } from "@/types/utils";

/**
 * This function lets you dynamically import a component. It uses `React.lazy()` with `Suspense` under the hood with a loading indicator
 *
 * Read more: [AueraUI Docs](https://aueraui.vercel.app/docs/utils/dyn)
 *
 * @param {LazyImportProps["importFunc"]} importFunc - The function used to import the component lazily.
 * This is typically a `React.lazy` import.
 *
 * @param {LazyImportProps["loaderOptions"]} [loaderOptions] - Optional configuration for the loader,
 * such as a color, className while the component is being loaded.
 *
 * @returns {React.FC} A component that wraps the dynamically imported component with `React.Suspense`.
 * The loading indicator is displayed while the component is being fetched.
 *
 * @example
 * const MyComponent = dyn(() => import('./MyComponent'), { color: "red-500" });
 *
 * // Usage in your application:
 *   <MyComponent />
 */
export const dyn = <T,>(
  importFunc: LazyImportProps<T>["importFunc"],
  loaderOptions?: LazyImportProps<T>["loaderOptions"]
) => {
  const DynComponent: React.ComponentType<T> = () => (
    <LazyImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );

  return DynComponent;
};
