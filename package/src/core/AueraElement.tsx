import { useMode } from "@/hook/use";
import { ModeType } from "@/types/auera-system";
import React from "react";

interface AueraElementProps<T extends keyof JSX.IntrinsicElements>
  extends React.HTMLAttributes<T> {
  tag: T;
  mode?: ModeType;
}

const AueraElement = <T extends keyof JSX.IntrinsicElements>({
  tag,
  children,
  mode,
  ...props
}: AueraElementProps<T>) => {
  const { currentMode } = useMode(mode);

  // Render the correct tag using React.createElement
  return React.createElement(
    tag,
    { ...props, "data-theme": currentMode },
    children
  );
};

export default AueraElement;

const AueraButton = (props: AueraElementProps<"button">) => {
  const { tag, ...rest } = props;
  return <AueraElement tag="button" {...rest} />;
};

export { AueraButton };
