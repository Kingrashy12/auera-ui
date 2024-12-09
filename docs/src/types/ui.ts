export type LoadIndicatorProps = {
  className?: string;
  color?: string;
};
export type LazyImportProps = {
  importFunc: () => Promise<{ default: React.ComponentType }>;
  loaderOptions?: LoadIndicatorProps;
};
