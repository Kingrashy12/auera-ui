import { useMode } from "@/hook/use";
import { AueraElementProps } from "@/types/auera-system";
import { useMemo } from "react";
import { createStyle } from "stywind";

// interface AueraElementProps<T extends keyof JSX.IntrinsicElements>
//   extends React.HTMLAttributes<T> {
//   tag: T;
//   mode?: ModeType;
// }

const AueraElement = ({
  tag = "div",
  children,
  mode,
  ...props
}: AueraElementProps) => {
  const { currentMode } = useMode(mode);

  const Element = useMemo(() => {
    return createStyle(tag).classname(props.className || "");
  }, [props]);

  // Render the correct tag using React.createElement
  // return React.createElement(
  //   tag,
  //   { ...props, "data-theme": currentMode },
  //   children
  // );
  return <Element data-theme={currentMode}>{children}</Element>;
};

export default AueraElement;

const AueraButton = (props: AueraElementProps) => {
  const { tag, ...rest } = props;
  return <AueraElement tag="button" {...rest} />;
};

export { AueraButton };
