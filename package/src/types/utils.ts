export type LoadIndicatorProps = {
  className?: string;
  color?: string;
};
export type LazyImportProps<T> = {
  importFunc: () => Promise<{ default: React.ComponentType<T> }>;
  loaderOptions?: LoadIndicatorProps;
};
