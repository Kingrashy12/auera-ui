import { validElementProps } from "./props";

export const useProps = (props: any, tag: keyof JSX.IntrinsicElements) => {
  const validProps = Object.keys((tag as any).propTypes || {});

  const { prefixedProps, remainingProps } = Object.entries(props).reduce<{
    prefixedProps: Record<string, any>;
    remainingProps: Record<string, any>;
  }>(
    (acc, [key, value]) => {
      if (
        typeof tag !== "function" &&
        key !== "children" &&
        !validElementProps.includes(key) &&
        !key.startsWith("data-") &&
        !validProps.includes(key)
      ) {
        if (typeof value === "function") {
          acc.remainingProps[key] = value;
        } else {
          acc.prefixedProps[`data-${key.toLowerCase()}`] = value;
        }
      } else {
        acc.remainingProps[key] = value;
      }
      return acc;
    },
    { prefixedProps: {}, remainingProps: {} }
  );

  const Props = { ...remainingProps, ...prefixedProps };

  return Props;
};
